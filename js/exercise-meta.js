/** Metadatos extra de ejercicios: pistas x3, tests parciales, quiz, errores comunes */

export const EXERCISE_META = {
  'l01-hola': {
    hints: [
      'Usa console.log("Aprendo JS hoy");',
      'console.log es una función. El texto va entre comillas dentro de los paréntesis.',
      'Copia exactamente: console.log("Aprendo JS hoy");',
    ],
    partialTests: [
      { label: 'Usa console.log', test: 'if (__logs.length === 0) throw new Error("Usa console.log");' },
    ],
    commonMistakes: ['Olvidar las comillas alrededor del texto', 'Escribir Console.log con C mayúscula', 'Confundir comillas tipográficas “ ” con "'],
    quiz: [{ q: '¿Para qué sirve console.log?', options: ['Imprimir en consola', 'Crear variables', 'Borrar código', 'Guardar archivos'], correct: 0 }],
  },
  'l02-variables': {
    hints: ['const ciudad = "Madrid"; let temperatura = 22;', 'Concatena con +: ciudad + ": " + temperatura + "°C"', 'console.log(ciudad + ": " + temperatura + "°C");'],
    partialTests: [
      { label: 'const ciudad', test: 'if (typeof ciudad !== "string") throw new Error("Define ciudad");' },
      { label: 'let temperatura', test: 'if (temperatura !== 22) throw new Error("temperatura = 22");' },
    ],
    commonMistakes: ['Usar let para ciudad cuando debe ser const', 'Olvidar el ° en la salida'],
    quiz: [{ q: '¿Cuál NO se puede reasignar?', options: ['const', 'let', 'var'], correct: 0 }],
  },
  'l04-operadores': {
    hints: ['return edad >= 18;', 'if (edad >= 18) { return true; } else { return false; }', 'return edad >= 18; // una línea basta'],
    partialTests: [{ label: 'Es función', test: 'if (typeof esMayorDeEdad !== "function") throw new Error("Define función");' }],
    commonMistakes: ['Usar = en lugar de >=', 'Olvidar return'],
    quiz: [{ q: '¿Qué devuelve 5 === "5"?', options: ['false', 'true', 'undefined'], correct: 0 }],
  },
};

export function getExerciseMeta(lessonId) {
  return EXERCISE_META[lessonId] || {
    hints: [],
    partialTests: [],
    commonMistakes: [],
    quiz: [],
  };
}

export function getHintForLevel(lessonId, exercise, level) {
  const meta = getExerciseMeta(lessonId);
  if (meta.hints[level - 1]) return meta.hints[level - 1];
  if (level === 1) return exercise.hint || 'Relee las instrucciones y el ejemplo.';
  if (level === 2) return 'Revisa la pestaña Ejemplo y el desglose línea a línea.';
  return exercise.solution ? 'Tras 3 intentos puedes ver la solución.' : exercise.hint;
}

export function renderQuizHtml(lessonId, quizPassed) {
  const meta = getExerciseMeta(lessonId);
  if (!meta.quiz?.length) return '';
  if (quizPassed) return '<div class="quiz-box quiz-box--done">✓ Quiz completado (+10 XP)</div>';
  const q = meta.quiz[0];
  return `
    <div class="quiz-box" data-quiz-lesson="${lessonId}">
      <h4>📝 Comprueba lo aprendido</h4>
      <p>${q.q}</p>
      <div class="quiz-options">
        ${q.options.map((o, i) => `<button type="button" class="btn btn--ghost btn--sm quiz-opt" data-idx="${i}">${o}</button>`).join('')}
      </div>
      <p class="quiz-feedback hidden" id="quizFeedback"></p>
    </div>
  `;
}

export function bindQuiz(container, lessonId, onPass) {
  const box = container.querySelector(`[data-quiz-lesson="${lessonId}"]`);
  if (!box) return;
  const meta = getExerciseMeta(lessonId);
  const q = meta.quiz?.[0];
  if (!q) return;
  box.querySelectorAll('.quiz-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      const fb = box.querySelector('#quizFeedback');
      if (idx === q.correct) {
        fb.textContent = '✓ Correcto! +10 XP';
        fb.className = 'quiz-feedback quiz-feedback--ok';
        onPass?.();
      } else {
        fb.textContent = '✗ Incorrecto. Relee la teoría e inténtalo de nuevo.';
        fb.className = 'quiz-feedback quiz-feedback--err';
      }
    });
  });
}

export function renderCompareOutput(expected, actual, hasError) {
  const match = !hasError && actual && expected && actual.includes(expected.split('\n')[0].slice(0, 8));
  return `
    <div class="compare-output">
      <div class="compare-col"><span>Esperado</span><pre>${escapeHtml(expected)}</pre></div>
      <div class="compare-col compare-col--actual${match ? ' compare-col--ok' : ''}"><span>Tu salida</span><pre id="compareActual">${escapeHtml(actual || '—')}</pre></div>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function renderPartialResults(results) {
  if (!results.length) return '';
  return `
    <ul class="partial-results">
      ${results.map((r) => `<li class="${r.passed ? 'ok' : 'fail'}">${r.passed ? '✓' : '✗'} ${r.label}</li>`).join('')}
    </ul>
  `;
}

export function renderCommonMistakes(lessonId) {
  const m = getExerciseMeta(lessonId).commonMistakes;
  if (!m?.length) return '';
  return `<div class="mistakes-box"><h4>⚠️ Errores comunes</h4><ul>${m.map((x) => `<li>${x}</li>`).join('')}</ul></div>`;
}

export function renderDomPlayground() {
  return `
    <div class="dom-playground" id="domPlayground">
      <h4>🌐 Playground DOM real</h4>
      <p class="panel-intro">Prueba manipular HTML de verdad (sandbox aislado):</p>
      <div class="dom-playground__preview">
        <h3 id="pgTitle">Título original</h3>
        <p id="pgCounter">0</p>
        <button type="button" id="pgBtn">+1</button>
      </div>
      <textarea class="dom-playground__code" id="pgCode" spellcheck="false">document.getElementById("pgTitle").textContent = "¡DOM en vivo!";
document.getElementById("pgCounter").textContent = "42";</textarea>
      <button type="button" class="btn btn--sm btn--primary" id="pgRun">▶ Ejecutar en DOM</button>
    </div>
  `;
}

export function bindDomPlayground(container) {
  const pg = container.querySelector('#domPlayground');
  if (!pg) return;
  const sandboxDoc = {
    getElementById: (id) => pg.querySelector(`#${id}`),
    querySelector: (sel) => pg.querySelector(sel),
  };
  pg.querySelector('#pgRun')?.addEventListener('click', () => {
    const code = pg.querySelector('#pgCode')?.value || '';
    try {
      const fn = new Function('document', 'console', `"use strict";\n${code}`);
      fn(sandboxDoc, { log: (...a) => console.log('[DOM]', ...a) });
    } catch (e) {
      alert('Error DOM: ' + e.message);
    }
  });
  pg.querySelector('#pgBtn')?.addEventListener('click', () => {
    const el = pg.querySelector('#pgCounter');
    el.textContent = String(parseInt(el.textContent, 10) + 1);
  });
}

export function renderRoadmap(completed, totalLessons) {
  const pct = Math.round((completed.length / totalLessons) * 100);
  return `
    <div class="roadmap">
      <div class="roadmap__bar"><div class="roadmap__fill" style="width:${pct}%"></div></div>
      <p class="roadmap__text">${completed.length}/${totalLessons} lecciones · ${pct}% del camino a dominar JS</p>
    </div>
  `;
}
