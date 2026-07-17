/**
 * Ejecutores multi-lenguaje
 */
import { runCode, runCodeWithTests, runCodeWithTestsAsync } from '../runner.js';

/* ---------- HTML ---------- */
export function parseHtml(html) {
  const wrapped = html.includes('<html') ? html : `<!DOCTYPE html><html><body>${html}</body></html>`;
  return new DOMParser().parseFromString(wrapped, 'text/html');
}

function runHtmlTests(code, testScript) {
  const userCode = code;
  const __logs = [];
  const parseHtmlFn = parseHtml;
  try {
    // eslint-disable-next-line no-eval
    eval(`(function(){ ${testScript} })()`);
    return { success: true, logs: __logs, message: '¡Correcto! HTML validado.' };
  } catch (err) {
    return { success: false, logs: __logs, error: err.message, message: err.message };
  }
}

/* ---------- CSS ---------- */
function runCssTests(code, testScript, htmlFixture = '<div id="test">Test</div>') {
  const userCode = code;
  const iframe = document.createElement('iframe');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.style.cssText = 'position:fixed;left:-9999px;width:400px;height:200px;';
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument;
  doc.open();
  doc.write(`<!DOCTYPE html><html><head><style>${code}</style></head><body>${htmlFixture}</body></html>`);
  doc.close();

  const getStyled = (sel) => {
    const el = doc.querySelector(sel);
    if (!el) throw new Error(`No se encontro elemento: ${sel}`);
    const s = iframe.contentWindow.getComputedStyle(el);
    return {
      color: s.color,
      backgroundColor: s.backgroundColor,
      paddingTop: s.paddingTop,
      marginTop: s.marginTop,
      borderWidth: s.borderWidth,
      borderRadius: s.borderRadius,
      display: s.display,
      justifyContent: s.justifyContent,
      gridTemplateColumns: s.gridTemplateColumns,
      fontSize: s.fontSize,
      position: s.position,
      opacity: s.opacity,
    };
  };

  try {
    // eslint-disable-next-line no-eval
    eval(`(function(){ ${testScript} })()`);
    document.body.removeChild(iframe);
    return { success: true, logs: [], message: '¡Correcto! CSS aplicado.' };
  } catch (err) {
    document.body.removeChild(iframe);
    return { success: false, logs: [], error: err.message, message: err.message };
  }
}

/* ---------- C# (simulador educativo) ---------- */
function simulateCSharp(code) {
  const logs = [];
  const vars = {};
  const methods = {};
  const objects = {};

  const evalExpr = (expr) => {
    expr = expr.trim();
    if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }
    if (/^\d+$/.test(expr)) return parseInt(expr, 10);
    if (vars[expr] !== undefined) return vars[expr];
    const prop = expr.match(/^(\w+)\.(\w+)$/);
    if (prop && objects[prop[1]]) return objects[prop[1]][prop[2]];
    if (expr.includes('+')) {
      return expr.split('+').map((p) => evalExpr(p.trim())).join('');
    }
    const call = expr.match(/^(\w+)\((.*)\)$/);
    if (call && methods[call[1]]) {
      const args = call[2] ? call[2].split(',').map((a) => evalExpr(a.trim())) : [];
      return methods[call[1]](...args);
    }
    return expr;
  };

  const clean = code.replace(/\/\/.*$/gm, '');
  const methodRe = /static\s+\w+\s+(\w+)\s*\(([^)]*)\)\s*\{([\s\S]*?)\}/g;
  let mm;
  while ((mm = methodRe.exec(clean))) {
    const [, name, params, body] = mm;
    const paramNames = params ? params.split(',').map((p) => p.trim().split(/\s+/).pop()) : [];
    const ret = body.match(/return\s+(.+?);/);
    methods[name] = (...args) => {
      paramNames.forEach((pn, i) => { vars[pn] = args[i]; });
      return ret ? evalExpr(ret[1]) : undefined;
    };
  }

  const lines = clean.split('\n').map((l) => l.trim()).filter(Boolean);

  for (const line of lines) {
    if (line.startsWith('class ') || line === '{' || line === '}') continue;

    const varNew = line.match(/^var\s+(\w+)\s*=\s*new\s+(\w+)\(\);?$/);
    if (varNew) { objects[varNew[1]] = {}; vars[varNew[1]] = objects[varNew[1]]; continue; }

    const propAssign = line.match(/^(\w+)\.(\w+)\s*=\s*(.+);?$/);
    if (propAssign) {
      const [, obj, prop, val] = propAssign;
      if (!objects[obj]) objects[obj] = {};
      objects[obj][prop] = evalExpr(val.replace(/;$/, ''));
      continue;
    }

    const decl = line.match(/^(int|string|bool|double)\s+(\w+)\s*=\s*(.+);?$/);
    if (decl) { vars[decl[2]] = evalExpr(decl[3]); continue; }

    const writeLine = line.match(/Console\.WriteLine\s*\((.+)\);?$/);
    if (writeLine) { logs.push(String(evalExpr(writeLine[1]))); continue; }

    const forInline = line.match(/^for\s*\(\s*int\s+(\w+)\s*=\s*(\d+)\s*;\s*\1\s*<=\s*(\d+)\s*;\s*\1\+\+\s*\)\s*\{\s*Console\.WriteLine\s*\((.+)\);\s*\}$/);
    if (forInline) {
      const [, v, start, end, arg] = forInline;
      for (let i = parseInt(start, 10); i <= parseInt(end, 10); i++) {
        vars[v] = i;
        logs.push(String(evalExpr(arg)));
      }
      continue;
    }

    if (line.startsWith('if ')) {
      const cond = line.match(/if\s*\((.+)\)/);
      if (cond) {
        const c = cond[1].trim();
        let ok = false;
        if (vars[c] !== undefined) ok = !!vars[c];
        else if (c.includes('>=')) {
          const [a, b] = c.split('>=').map((x) => evalExpr(x.trim()));
          ok = a >= b;
        }
        const ifBlock = clean.match(/if\s*\([^)]+\)\s*\{([\s\S]*?)\}/);
        const elseBlock = clean.match(/else\s*\{([\s\S]*?)\}/);
        if (ok && ifBlock) {
          const wl = ifBlock[1].match(/Console\.WriteLine\s*\((.+)\)/);
          if (wl) logs.push(String(evalExpr(wl[1])));
        } else if (!ok && elseBlock) {
          const wl = elseBlock[1].match(/Console\.WriteLine\s*\((.+)\)/);
          if (wl) logs.push(String(evalExpr(wl[1])));
        }
      }
    }
  }

  return logs;
}

function runCSharpTests(code, testScript) {
  const userCode = code;
  const __logs = simulateCSharp(code);
  try {
    // eslint-disable-next-line no-eval
    eval(`(function(){ ${testScript} })()`);
    return { success: true, logs: __logs, message: '¡Correcto! C# validado.' };
  } catch (err) {
    return { success: false, logs: __logs, error: err.message, message: err.message };
  }
}

/* ---------- Python (Pyodide) ---------- */
let pyodideLoading = null;

async function getPyodide() {
  if (window.__pyodideReady) return window.__pyodideReady;
  if (!pyodideLoading) {
    pyodideLoading = (async () => {
      if (!window.loadPyodide) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      window.__pyodideReady = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
      });
      return window.__pyodideReady;
    })();
  }
  return pyodideLoading;
}

async function runPythonTests(code, testScript) {
  const pyodide = await getPyodide();
  const __logs = [];
  pyodide.setStdout({
    batched: (msg) => { __logs.push(msg); },
  });
  pyodide.setStderr({
    batched: (msg) => { __logs.push('⚠ ' + msg); },
  });
  const userCode = code;
  try {
    await pyodide.runPythonAsync(code);
    // eslint-disable-next-line no-eval
    eval(`(function(){ ${testScript} })()`);
    return { success: true, logs: [...__logs], message: '¡Correcto! Python ejecutado.' };
  } catch (err) {
    return { success: false, logs: [...__logs], error: err.message, message: err.message || String(err) };
  }
}

/* ---------- SQL (sql.js) ---------- */
let sqlLoading = null;
const SQL_SCHEMA = `
CREATE TABLE usuarios (id INTEGER, nombre TEXT, edad INTEGER);
INSERT INTO usuarios VALUES (1, 'Ana', 25);
INSERT INTO usuarios VALUES (2, 'Carlos', 25);
INSERT INTO usuarios VALUES (3, 'Luis', 19);
INSERT INTO usuarios VALUES (4, 'Maria', 30);
CREATE TABLE productos (id INTEGER, nombre TEXT, precio REAL, categoria TEXT);
INSERT INTO productos VALUES (1, 'Teclado', 49.99, 'Tech');
INSERT INTO productos VALUES (2, 'Mouse', 19.99, 'Tech');
INSERT INTO productos VALUES (3, 'Libro', 12.50, 'Libros');
INSERT INTO productos VALUES (4, 'Monitor', 199.99, 'Tech');
CREATE TABLE pedidos (id INTEGER, usuario_id INTEGER, producto_id INTEGER, cantidad INTEGER);
INSERT INTO pedidos VALUES (1, 1, 1, 1);
INSERT INTO pedidos VALUES (2, 2, 2, 2);
INSERT INTO pedidos VALUES (3, 1, 3, 1);
INSERT INTO pedidos VALUES (4, 4, 4, 1);
`;

async function getSqlDb() {
  if (!window.__SQL) {
    if (!sqlLoading) {
      sqlLoading = (async () => {
        if (!window.initSqlJs) {
          await new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = 'https://sql.js.org/dist/sql-wasm.js';
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
          });
        }
        window.__SQL = await window.initSqlJs({
          locateFile: (f) => `https://sql.js.org/dist/${f}`,
        });
      })();
    }
    await sqlLoading;
  }
  const db = new window.__SQL.Database();
  db.run(SQL_SCHEMA);
  return db;
}

async function runSqlTests(code, testScript) {
  const db = await getSqlDb();
  const userCode = code.trim();
  let __rows = [];
  try {
    const upper = userCode.toUpperCase();
    if (upper.startsWith('SELECT')) {
      const res = db.exec(userCode);
      if (res[0]) {
        const cols = res[0].columns;
        __rows = res[0].values.map((row) => {
          const o = {};
          cols.forEach((c, i) => { o[c] = row[i]; });
          return o;
        });
      }
    } else {
      db.run(userCode);
      if (upper.startsWith('INSERT') || upper.startsWith('UPDATE')) {
        const check = db.exec('SELECT * FROM usuarios');
        if (check[0]) {
          const cols = check[0].columns;
          __rows = check[0].values.map((row) => {
            const o = {};
            cols.forEach((c, i) => { o[c] = row[i]; });
            return o;
          });
        }
      }
    }
    // eslint-disable-next-line no-eval
    eval(`(function(){ ${testScript} })()`);
    db.close();
    return { success: true, logs: __rows.map((r) => JSON.stringify(r)), message: '¡Correcto! SQL ejecutado.' };
  } catch (err) {
    db.close();
    return { success: false, logs: [], error: err.message, message: err.message };
  }
}

/* ---------- TypeScript (strip types → JS) ---------- */
export function stripTypeScript(code) {
  let s = code;
  s = s.replace(/interface\s+\w+\s*(?:<[^>]*>)?\s*\{[\s\S]*?\}\s*/g, '');
  s = s.replace(/type\s+\w+\s*(?:<[^>]*>)?\s*=\s*[\s\S]*?;\s*/g, '');
  s = s.replace(/\(\s*([^)]*)\s*\)\s*:\s*[\w[\]|<>?,\s]+(?=\s*(?:=>|\{))/g, '($1)');
  s = s.replace(/\bfunction\s+(\w+)\s*\(([^)]*)\)\s*:\s*[\w[\]|<>?,\s]+/g, 'function $1($2)');
  s = s.replace(/\b(const|let)\s+(\w+):\s*[^=;\n]+=/g, '$1 $2 =');
  s = s.replace(/:\s*[\w[\]|<>?,\s]+(?=\s*=>)/g, '');
  s = s.replace(/(\w+)\s*:\s*(?:string|number|boolean|void|any|unknown|null|undefined|\w+\[\]|[A-Za-z|<>?,\s]+)(?=[,)])/g, '$1');
  s = s.replace(/enum\s+(\w+)\s*\{([\s\S]*?)\}/g, (_, name, body) => {
    const members = body.split(',').map((m) => m.trim()).filter(Boolean);
    return `const ${name} = { ${members.map((m, i) => `${m}: ${i}`).join(', ')} };`;
  });
  return s;
}

function runTypeScriptTests(code, testScript) {
  const stripped = stripTypeScript(code);
  const userCode = stripped;
  return runCodeWithTests(stripped, testScript);
}

/* ---------- Git (comandos) ---------- */
function runGitTests(code, testScript) {
  const userCode = code;
  const __logs = [];
  try {
    // eslint-disable-next-line no-eval
    eval(`(function(){ ${testScript} })()`);
    return { success: true, logs: __logs, message: '¡Correcto! Comando Git validado.' };
  } catch (err) {
    return { success: false, logs: __logs, error: err.message, message: err.message };
  }
}

/* ---------- API unificada ---------- */
export function runCodeForLesson(code, lesson, { check = false } = {}) {
  const runner = lesson.exercise?.runner || 'javascript';
  if (!check) {
    if (runner === 'html') return { logs: ['Vista previa HTML — usa Comprobar para validar'], success: true };
    if (runner === 'css') return { logs: ['Vista previa CSS — usa Comprobar para validar'], success: true };
    if (runner === 'python') return { logs: ['Pulsa Comprobar para ejecutar Python'], success: true };
    if (runner === 'csharp') {
      const logs = simulateCSharp(code);
      return { logs, success: true };
    }
    if (runner === 'sql') return { logs: ['Pulsa Comprobar para ejecutar SQL'], success: true };
    if (runner === 'git') return { logs: [code.trim() || '(escribe un comando git)'], success: true };
    return runCode(code);
  }
  return null;
}

export async function runCodeWithTestsForLesson(code, lesson) {
  const ex = lesson.exercise;
  const runner = ex.runner || 'javascript';
  const tests = ex.tests || '';

  switch (runner) {
    case 'html':
      return runHtmlTests(code, tests);
    case 'css':
      return runCssTests(code, tests, ex.htmlFixture);
    case 'csharp':
      return runCSharpTests(code, tests);
    case 'python':
      return runPythonTests(code, tests);
    case 'sql':
      return runSqlTests(code, tests);
    case 'git':
      return runGitTests(code, tests);
    case 'typescript':
      return runTypeScriptTests(code, tests);
    default:
      if (ex.async) return runCodeWithTestsAsync(code, tests);
      return runCodeWithTests(code, tests);
  }
}

export async function runPreviewForLesson(code, lesson) {
  const runner = lesson.exercise?.runner || 'javascript';
  if (runner === 'python') {
    const pyodide = await getPyodide();
    const logs = [];
    pyodide.setStdout({ batched: (m) => logs.push(m) });
    try {
      await pyodide.runPythonAsync(code);
      return { logs, success: true, ms: 0 };
    } catch (err) {
      return { logs, error: err.message, success: false, ms: 0 };
    }
  }
  if (runner === 'csharp') {
    const logs = simulateCSharp(code);
    return { logs, success: true, ms: 0 };
  }
  if (runner === 'sql') {
    try {
      const db = await getSqlDb();
      const res = db.exec(code);
      db.close();
      const logs = res[0] ? res[0].values.map((r) => r.join(' | ')) : ['OK'];
      return { logs, success: true, ms: 0 };
    } catch (err) {
      return { logs: [], error: err.message, success: false, ms: 0 };
    }
  }
  if (runner === 'git') {
    return { logs: [code.trim()], success: true, ms: 0 };
  }
  return runCode(code);
}
