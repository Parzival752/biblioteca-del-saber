/**
 * Ejecutor de código con timeout via Web Worker
 */
const WORKER_SRC = `
self.onmessage = function(e) {
  const { id, userCode, testScript, asyncMode, partialOnly } = e.data;
  const logs = [];
  const console = {
    log: (...a) => logs.push(a.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')),
    warn: (...a) => logs.push('⚠ ' + a.join(' ')),
    error: (...a) => logs.push('⚠ ' + a.join(' ')),
    info: (...a) => logs.push('ℹ ' + a.join(' ')),
  };
  try {
    if (partialOnly) {
      const fn = new Function('console', '__logs', userCode + '\\n' + testScript);
      fn(console, logs);
      self.postMessage({ id, success: true, logs, errors: [] });
      return;
    }
    if (asyncMode) {
      const fn = new Function('console', '__logs', 'return (async () => { ' + userCode + testScript + ' })();');
      fn(console, logs).then(() => {
        self.postMessage({ id, success: true, logs, errors: [], message: '¡Correcto! Todos los tests pasaron.' });
      }).catch(err => {
        self.postMessage({ id, success: false, logs, errors: [], message: err.message || String(err) });
      });
      return;
    }
    const fn = new Function('console', '__logs', userCode + '\\n' + testScript);
    fn(console, logs);
    self.postMessage({ id, success: true, logs, errors: [], message: '¡Correcto! Todos los tests pasaron.' });
  } catch (err) {
    self.postMessage({ id, success: false, logs, errors: [], message: err.message || String(err) });
  }
};
`;

let workerUrl = null;
function getWorker() {
  if (!workerUrl) workerUrl = URL.createObjectURL(new Blob([WORKER_SRC], { type: 'application/javascript' }));
  return new Worker(workerUrl);
}

let execId = 0;

function runInWorker(payload, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const id = ++execId;
    const worker = getWorker();
    const t0 = performance.now();
    let done = false;

    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      worker.terminate();
      resolve({
        success: false,
        logs: [],
        errors: [],
        error: '⏱ Tiempo agotado (5s). ¿Tienes un bucle infinito?',
        message: '⏱ Tiempo agotado. Revisa bucles infinitos o código muy pesado.',
        ms: timeoutMs,
      });
    }, timeoutMs);

    worker.onmessage = (e) => {
      if (e.data.id !== id || done) return;
      done = true;
      clearTimeout(timer);
      worker.terminate();
      const ms = Math.round(performance.now() - t0);
      const r = e.data;
      if (r.success) {
        resolve({ ...r, ms });
      } else {
        resolve({
          ...r,
          error: formatRuntimeError({ message: r.message }, payload.userCode),
          ms,
        });
      }
    };

    worker.onerror = (e) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      worker.terminate();
      resolve({
        success: false,
        logs: [],
        errors: [],
        error: e.message || 'Error en el worker',
        message: e.message,
        ms: Math.round(performance.now() - t0),
      });
    };

    worker.postMessage({ id, ...payload });
  });
}

export function createConsoleCapture() {
  const logs = [];
  const errors = [];
  const console = {
    log: (...args) => logs.push(args.map(formatArg).join(' ')),
    warn: (...args) => logs.push(`⚠ ${args.map(formatArg).join(' ')}`),
    error: (...args) => errors.push(args.map(formatArg).join(' ')),
    info: (...args) => logs.push(`ℹ ${args.map(formatArg).join(' ')}`),
  };
  return { console, logs, errors };
}

function formatArg(a) {
  if (typeof a === 'object' && a !== null) {
    try { return JSON.stringify(a); } catch { return String(a); }
  }
  return String(a);
}

/** Ejecución rápida en hilo principal (solo probar, sin tests) */
export function runCode(code) {
  const { console, logs, errors } = createConsoleCapture();
  let error = null;
  const t0 = performance.now();
  try {
    const fn = new Function('console', '"use strict";\n' + code);
    fn(console);
  } catch (e) {
    error = formatRuntimeError(e, code);
  }
  return { logs, errors, error, ms: Math.round(performance.now() - t0) };
}

export async function runCodeWithTests(userCode, testScript, opts = {}) {
  return runInWorker({
    userCode: '"use strict";\n' + userCode + '\n',
    testScript,
    asyncMode: false,
  }, opts.timeoutMs || 5000);
}

export async function runCodeWithTestsAsync(userCode, testScript, opts = {}) {
  return runInWorker({
    userCode,
    testScript,
    asyncMode: true,
  }, opts.timeoutMs || 8000);
}

export async function runPartialTest(userCode, testScript) {
  try {
    const r = await runInWorker({
      userCode: '"use strict";\n' + userCode + '\n',
      testScript,
      asyncMode: false,
      partialOnly: true,
    }, 3000);
    return { passed: r.success, message: r.success ? 'OK' : (r.message || r.error) };
  } catch (e) {
    return { passed: false, message: e.message };
  }
}

export function runExample(code) {
  return runCode(code);
}

const ERROR_HINTS = {
  'Unexpected token': 'Revisa la sintaxis: ¿falta un paréntesis, llave o punto y coma?',
  'is not defined': 'Variable o función no definida. ¿La escribiste bien? ¿Está en el scope correcto?',
  'is not a function': 'Intentas llamar algo que no es una función.',
  'Cannot read propert': 'Accedes a una propiedad de undefined o null.',
  'Assignment to constant': 'No puedes reasignar una variable declarada con const.',
  'Unexpected end of input': 'Código incompleto: falta cerrar paréntesis, llaves o corchetes.',
  'Invalid or unexpected token': 'Carácter inválido. Revisa comillas y símbolos.',
  'Unexpected identifier': 'Palabra inesperada. ¿Falta un operador o punto y coma antes?',
};

function formatRuntimeError(e, code) {
  if (!e) return 'Error desconocido';
  const msg = e.message || String(e);
  for (const [key, hint] of Object.entries(ERROR_HINTS)) {
    if (msg.includes(key)) return `${msg}\n\n💡 ${hint}`;
  }
  if (code) {
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (msg.includes(`line ${i + 1}`) || msg.includes(`:${i + 1}:`)) {
        return `${msg}\n\n📍 Línea ${i + 1}: ${lines[i].trim()}`;
      }
    }
  }
  return msg;
}

export { formatRuntimeError };
