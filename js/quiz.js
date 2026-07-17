/** Renderizado y validación de quizzes */

export function renderQuizExercise(exercise, lessonId, passed) {
  if (passed) {
    return '<div class="quiz-box quiz-box--done">✓ Ejercicio completado (+50 XP)</div>';
  }
  const questions = exercise.questions || [];
  if (!questions.length) return '<p class="text-muted">Sin preguntas configuradas.</p>';

  return `
    <div class="quiz-exercise" data-lesson="${lessonId}">
      <p class="exercise-instructions">${exercise.instructions || 'Responde todas las preguntas correctamente.'}</p>
      ${questions.map((q, qi) => `
        <div class="quiz-question" data-qidx="${qi}" data-correct="${q.correct}">
          <p class="quiz-question__text"><strong>${qi + 1}.</strong> ${q.q}</p>
          <div class="quiz-options">
            ${q.options.map((o, oi) => `
              <button type="button" class="btn btn--ghost btn--sm quiz-opt" data-idx="${oi}">${o}</button>
            `).join('')}
          </div>
          <p class="quiz-feedback hidden"></p>
        </div>
      `).join('')}
      <button type="button" class="btn btn--primary quiz-submit" disabled>Comprobar respuestas</button>
      <p class="quiz-result hidden"></p>
    </div>
  `;
}

export function bindQuizExercise(container, exercise, callbacks = {}) {
  const box = container.querySelector('.quiz-exercise');
  if (!box) return;

  const answers = {};
  let answeredCount = 0;
  const total = exercise.questions?.length || 0;
  const submitBtn = box.querySelector('.quiz-submit');
  const resultEl = box.querySelector('.quiz-result');

  box.querySelectorAll('.quiz-question').forEach((qEl) => {
    const qidx = qEl.dataset.qidx;
    const correct = Number(qEl.dataset.correct);
    const fb = qEl.querySelector('.quiz-feedback');

    qEl.querySelectorAll('.quiz-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (answers[qidx] !== undefined) return;
        const idx = Number(btn.dataset.idx);
        answers[qidx] = idx;
        answeredCount += 1;
        qEl.querySelectorAll('.quiz-opt').forEach((b) => b.classList.remove('quiz-opt--selected'));
        btn.classList.add('quiz-opt--selected');
        if (idx === correct) {
          fb.textContent = '✓ Correcto';
          fb.className = 'quiz-feedback quiz-feedback--ok';
        } else {
          fb.textContent = `✗ Incorrecto. Respuesta: ${exercise.questions[qidx].options[correct]}`;
          fb.className = 'quiz-feedback quiz-feedback--err';
        }
        if (answeredCount >= total) submitBtn.disabled = false;
      });
    });
  });

  submitBtn?.addEventListener('click', () => {
    const allCorrect = exercise.questions.every((q, i) => answers[i] === q.correct);
    if (allCorrect) {
      resultEl.textContent = '¡Perfecto! Lección completada.';
      resultEl.className = 'quiz-result quiz-result--ok';
      callbacks.onPass?.();
    } else {
      resultEl.textContent = 'Revisa las respuestas marcadas en rojo e inténtalo de nuevo.';
      resultEl.className = 'quiz-result quiz-result--err';
      callbacks.onFail?.();
    }
  });
}

export function renderExampleHtml(example) {
  if (!example) return '<p class="text-muted">Sin ejemplo para esta lección.</p>';
  const title = example.title ? `<h3>${example.title}</h3>` : '';
  const content = example.content || example.html || '';
  const tip = example.tip ? `<p class="example-tip">💡 ${example.tip}</p>` : '';
  return `<div class="example-box">${title}${content}${tip}</div>`;
}
