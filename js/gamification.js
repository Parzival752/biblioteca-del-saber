export const BADGES = [
  { id: 'first', icon: '🚀', name: 'Primer paso', desc: 'Completa tu primera lección', target: 1 },
  { id: 'half', icon: '⚡', name: 'A mitad de camino', desc: 'Completa 10 lecciones', target: 10 },
  { id: 'graduate', icon: '🎓', name: 'Graduado', desc: 'Completa todo un saber', target: null },
  { id: 'streak3', icon: '🔥', name: 'Racha x3', desc: 'Estudia 3 días seguidos', target: 3 },
  { id: 'streak7', icon: '💪', name: 'Racha x7', desc: 'Estudia 7 días seguidos', target: 7 },
  { id: 'xp500', icon: '⭐', name: 'Estrella', desc: 'Acumula 500 XP', target: 500 },
  { id: 'noHints', icon: '🧠', name: 'Sin pistas', desc: '5 lecciones sin usar pistas', target: 5 },
  { id: 'persistent', icon: '🎯', name: 'Persistente', desc: 'Suma 20 intentos de ejercicios', target: 20 },
  { id: 'quiz5', icon: '📝', name: 'Quiz master', desc: 'Aprueba 5 quizzes', target: 5 },
  { id: 'daily', icon: '📅', name: 'Desafío diario', desc: 'Completa el reto del día', target: 1 },
  { id: 'night', icon: '🌙', name: 'Noctámbulo', desc: 'Estudia después de las 22:00', target: 1 },
  { id: 'perfect', icon: '💎', name: 'Perfeccionista', desc: '3 lecciones a la primera', target: 3 },
];

function badgeCurrent(badge, state, totalLessons) {
  switch (badge.id) {
    case 'first':
    case 'half':
      return state.completed?.length || 0;
    case 'graduate':
      return state.completed?.length || 0;
    case 'streak3':
    case 'streak7':
      return state.streak || 0;
    case 'xp500':
      return state.xp || 0;
    case 'noHints':
      return (state.noHintLessons || []).length;
    case 'persistent':
      return state.totalAttempts || 0;
    case 'quiz5':
      return (state.quizzesPassed || []).length;
    case 'daily':
      return state.dailyChallengeDone && state.dailyChallengeDate ? 1 : 0;
    case 'night':
      return state.studiedAtNight ? 1 : 0;
    case 'perfect':
      return (state.perfectLessons || []).length;
    default:
      return 0;
  }
}

function badgeTarget(badge, totalLessons) {
  if (badge.id === 'graduate') return Math.max(totalLessons || 1, 1);
  return badge.target ?? 1;
}

function badgeCheck(badge, state, totalLessons) {
  const current = badgeCurrent(badge, state, totalLessons);
  const target = badgeTarget(badge, totalLessons);
  return current >= target;
}

export const XP_PER_LESSON = 50;
export const XP_BONUS_NO_HINT = 15;

export function getEarnedBadges(state, totalLessons) {
  return BADGES.filter((b) => badgeCheck(b, state, totalLessons));
}

/** Todas las insignias con estado Steam-like (ganada / bloqueada + progreso). */
export function getAchievements(state, totalLessons) {
  return BADGES.map((badge) => {
    const current = badgeCurrent(badge, state, totalLessons);
    const target = badgeTarget(badge, totalLessons);
    const earned = current >= target;
    const pct = Math.min(100, Math.round((current / target) * 100));
    return {
      ...badge,
      current: Math.min(current, target),
      target,
      earned,
      pct,
      progressLabel: earned ? 'Desbloqueada' : `${Math.min(current, target)} / ${target}`,
    };
  });
}

export function renderAchievementsHtml(state, totalLessons, { compact = false } = {}) {
  const all = getAchievements(state, totalLessons);
  const earnedCount = all.filter((b) => b.earned).length;
  // En vista compacta: ganadas primero, luego las más cercanas a desbloquear
  const list = compact
    ? [...all].sort((a, b) => {
      if (a.earned !== b.earned) return a.earned ? -1 : 1;
      return b.pct - a.pct;
    }).slice(0, 6)
    : all;
  const items = list.map((b) => {
    const locked = !b.earned;
    return `
      <article class="steam-ach ${locked ? 'steam-ach--locked' : 'steam-ach--earned'}" title="${escapeAttr(b.desc)}">
        <div class="steam-ach__icon" aria-hidden="true">
          <span class="steam-ach__emoji">${b.icon}</span>
          ${locked ? '<span class="steam-ach__lock">🔒</span>' : '<span class="steam-ach__check">✓</span>'}
        </div>
        <div class="steam-ach__body">
          <h4 class="steam-ach__name">${escapeHtml(b.name)}</h4>
          <p class="steam-ach__desc">${escapeHtml(b.desc)}</p>
          ${locked ? `
            <div class="steam-ach__bar" role="progressbar" aria-valuenow="${b.pct}" aria-valuemin="0" aria-valuemax="100">
              <div class="steam-ach__bar-fill" style="width:${b.pct}%"></div>
            </div>
          ` : ''}
        </div>
        <div class="steam-ach__meta">
          <span class="steam-ach__status">${escapeHtml(b.progressLabel)}</span>
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="steam-achievements ${compact ? 'steam-achievements--compact' : ''}">
      <div class="steam-achievements__head">
        <span class="steam-achievements__title">Logros</span>
        <span class="steam-achievements__count">${earnedCount} / ${all.length} desbloqueados</span>
      </div>
      <div class="steam-achievements__list">
        ${items}
      </div>
      ${compact && all.length > list.length
        ? `<p class="steam-achievements__more">+${all.length - list.length} logros más — pulsa «Ver todos»</p>`
        : ''}
    </div>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}

export function getLevel(xp) {
  const levels = [
    { name: 'Novato', min: 0, tier: 0 },
    { name: 'Aprendiz', min: 100, tier: 1 },
    { name: 'Explorador', min: 300, tier: 2 },
    { name: 'Sabio', min: 600, tier: 3 },
    { name: 'Alebrije', min: 1000, tier: 4 },
  ];
  let current = levels[0];
  for (const lvl of levels) { if (xp >= lvl.min) current = lvl; }
  const next = levels.find((l) => l.min > xp);
  return {
    name: current.name,
    tier: current.tier,
    xp,
    nextAt: next?.min ?? null,
    nextName: next?.name ?? null,
    progress: next ? Math.round(((xp - current.min) / (next.min - current.min)) * 100) : 100,
  };
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export { recordStudyTime, markPerfectLesson } from './storage.js';
