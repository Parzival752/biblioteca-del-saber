import { getCurriculum } from './courses/registry.js';
import { getCourseSpecificBadges } from './course-achievements.js';

/** Logros compartidos (todos los saberes). Filtrados por minLessons del curso. */
export const SHARED_BADGES = [
  { id: 'first', icon: '🚀', name: 'Primer paso', desc: 'Completa tu primera lección', metric: 'lessons', target: 1, group: 'shared' },
  { id: 'lessons5', icon: '👣', name: 'Calentando', desc: 'Completa 5 lecciones', metric: 'lessons', target: 5, minLessons: 5, group: 'shared' },
  { id: 'half', icon: '⚡', name: 'A mitad de camino', desc: 'Completa 10 lecciones', metric: 'lessons', target: 10, minLessons: 10, group: 'shared' },
  { id: 'lessons20', icon: '🛤️', name: 'Camino firme', desc: 'Completa 20 lecciones', metric: 'lessons', target: 20, minLessons: 20, group: 'shared' },
  { id: 'lessons35', icon: '🏔️', name: 'Cumbre cercana', desc: 'Completa 35 lecciones', metric: 'lessons', target: 35, minLessons: 35, group: 'shared' },
  { id: 'graduate', icon: '🎓', name: 'Graduado', desc: 'Completa todo un saber', metric: 'lessons', target: null, group: 'shared' },
  { id: 'streak3', icon: '🔥', name: 'Racha x3', desc: 'Estudia 3 días seguidos', metric: 'streak', target: 3, group: 'shared' },
  { id: 'streak7', icon: '💪', name: 'Racha x7', desc: 'Estudia 7 días seguidos', metric: 'streak', target: 7, group: 'shared' },
  { id: 'streak14', icon: '🗓️', name: 'Racha x14', desc: 'Estudia 14 días seguidos', metric: 'streak', target: 14, group: 'shared' },
  { id: 'xp500', icon: '⭐', name: 'Estrella', desc: 'Acumula 500 XP', metric: 'xp', target: 500, group: 'shared' },
  { id: 'xp1000', icon: '🌟', name: 'Constelación', desc: 'Acumula 1000 XP', metric: 'xp', target: 1000, minLessons: 15, group: 'shared' },
  { id: 'xp2000', icon: '✨', name: 'Supernova', desc: 'Acumula 2000 XP', metric: 'xp', target: 2000, minLessons: 40, group: 'shared' },
  { id: 'noHints', icon: '🧠', name: 'Sin pistas', desc: '5 lecciones sin usar pistas', metric: 'noHints', target: 5, group: 'shared' },
  { id: 'noHints12', icon: '🧩', name: 'Autonomía', desc: '12 lecciones sin pistas', metric: 'noHints', target: 12, minLessons: 20, group: 'shared' },
  { id: 'persistent', icon: '🎯', name: 'Persistente', desc: 'Suma 20 intentos de ejercicios', metric: 'attempts', target: 20, group: 'shared' },
  { id: 'persistent50', icon: '🏋️', name: 'Incansable', desc: 'Suma 50 intentos de ejercicios', metric: 'attempts', target: 50, minLessons: 25, group: 'shared' },
  { id: 'quiz5', icon: '📝', name: 'Quiz master', desc: 'Aprueba 5 quizzes', metric: 'quizzes', target: 5, group: 'shared' },
  { id: 'quiz15', icon: '📚', name: 'Examinador', desc: 'Aprueba 15 quizzes', metric: 'quizzes', target: 15, minLessons: 25, group: 'shared' },
  { id: 'daily', icon: '📅', name: 'Desafío diario', desc: 'Completa el reto del día', metric: 'daily', target: 1, group: 'shared' },
  { id: 'night', icon: '🌙', name: 'Noctámbulo', desc: 'Estudia después de las 22:00', metric: 'night', target: 1, group: 'shared' },
  { id: 'perfect', icon: '💎', name: 'Perfeccionista', desc: '3 lecciones a la primera', metric: 'perfect', target: 3, group: 'shared' },
  { id: 'perfect8', icon: '💍', name: 'Casi impecable', desc: '8 lecciones a la primera', metric: 'perfect', target: 8, minLessons: 20, group: 'shared' },
];

/** @deprecated Usa getBadgesForCourse — se mantiene por compatibilidad. */
export const BADGES = SHARED_BADGES;

export const XP_PER_LESSON = 50;
export const XP_BONUS_NO_HINT = 15;

function badgeTarget(badge, totalLessons) {
  if (badge.metric === 'lessons' && (badge.target == null || badge.id === 'graduate')) {
    return Math.max(totalLessons || 1, 1);
  }
  return badge.target ?? 1;
}

function badgeCurrent(badge, state, totalLessons, courseId) {
  const metric = badge.metric || legacyMetric(badge.id);
  switch (metric) {
    case 'lessons':
      return state.completed?.length || 0;
    case 'streak':
      return state.streak || 0;
    case 'xp':
      return state.xp || 0;
    case 'noHints':
      return (state.noHintLessons || []).length;
    case 'attempts':
      return state.totalAttempts || 0;
    case 'quizzes':
      return (state.quizzesPassed || []).length;
    case 'daily':
      return state.dailyChallengeDone && state.dailyChallengeDate ? 1 : 0;
    case 'night':
      return state.studiedAtNight ? 1 : 0;
    case 'perfect':
      return (state.perfectLessons || []).length;
    case 'module': {
      const modules = getCurriculum(courseId || badge.courseId) || [];
      const mod = modules[badge.moduleIndex];
      if (!mod) return 0;
      const done = new Set(state.completed || []);
      return mod.lessons.filter((l) => done.has(l.id)).length;
    }
    default:
      return 0;
  }
}

/** Compat con ids antiguos sin campo metric. */
function legacyMetric(id) {
  if (['first', 'half', 'graduate', 'lessons5', 'lessons20', 'lessons35'].includes(id)) return 'lessons';
  if (id.startsWith('streak')) return 'streak';
  if (id.startsWith('xp')) return 'xp';
  if (id.startsWith('noHints')) return 'noHints';
  if (id.startsWith('persistent')) return 'attempts';
  if (id.startsWith('quiz')) return 'quizzes';
  if (id === 'daily') return 'daily';
  if (id === 'night') return 'night';
  if (id.startsWith('perfect')) return 'perfect';
  return 'lessons';
}

function isBadgeAvailable(badge, totalLessons) {
  if (badge.minLessons && totalLessons < badge.minLessons) return false;
  const target = badgeTarget(badge, totalLessons);
  if (badge.metric === 'lessons' && badge.target != null && badge.target > totalLessons) return false;
  if (target > totalLessons && badge.metric === 'lessons') return false;
  return true;
}

/** Lista completa de logros del saber activo (compartidos + personalizados si aplica). */
export function getBadgesForCourse(courseId, totalLessons) {
  const shared = SHARED_BADGES
    .filter((b) => isBadgeAvailable(b, totalLessons))
    .map((b) => ({ ...b, group: 'shared' }));
  const specific = getCourseSpecificBadges(courseId)
    .filter((b) => isBadgeAvailable(b, totalLessons));
  return [...shared, ...specific];
}

export function getBadgesCount(courseId, totalLessons) {
  return getBadgesForCourse(courseId, totalLessons).length;
}

function enrichAchievement(badge, state, totalLessons, courseId) {
  const currentRaw = badgeCurrent(badge, state, totalLessons, courseId);
  const target = badgeTarget(badge, totalLessons);
  const earned = currentRaw >= target;
  const current = Math.min(currentRaw, target);
  const pct = Math.min(100, Math.round((currentRaw / target) * 100));
  return {
    ...badge,
    current,
    target,
    earned,
    pct,
    progressLabel: earned ? 'Desbloqueada' : `${current} / ${target}`,
  };
}

export function getEarnedBadges(state, totalLessons, courseId) {
  return getBadgesForCourse(courseId, totalLessons)
    .map((b) => enrichAchievement(b, state, totalLessons, courseId))
    .filter((b) => b.earned);
}

/** Todas las insignias con estado Steam-like (ganada / bloqueada + progreso). */
export function getAchievements(state, totalLessons, courseId) {
  return getBadgesForCourse(courseId, totalLessons)
    .map((b) => enrichAchievement(b, state, totalLessons, courseId));
}

const GROUP_LABELS = {
  shared: 'Generales',
  module: 'Módulos del saber',
  course: 'De este saber',
};

export function renderAchievementsHtml(state, totalLessons, { compact = false, courseId } = {}) {
  const all = getAchievements(state, totalLessons, courseId);
  const earnedCount = all.filter((b) => b.earned).length;

  const list = compact
    ? [...all].sort((a, b) => {
      if (a.earned !== b.earned) return a.earned ? -1 : 1;
      return b.pct - a.pct;
    }).slice(0, 6)
    : all;

  const renderItem = (b) => {
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
  };

  let bodyHtml;
  if (compact) {
    bodyHtml = `<div class="steam-achievements__list">${list.map(renderItem).join('')}</div>`;
  } else {
    const groups = ['shared', 'module', 'course'];
    bodyHtml = groups.map((g) => {
      const items = list.filter((b) => (b.group || 'shared') === g);
      if (!items.length) return '';
      return `
        <div class="steam-achievements__section">
          <h3 class="steam-achievements__section-title">${GROUP_LABELS[g] || g}</h3>
          <div class="steam-achievements__list">${items.map(renderItem).join('')}</div>
        </div>
      `;
    }).join('');
  }

  return `
    <div class="steam-achievements ${compact ? 'steam-achievements--compact' : ''}">
      <div class="steam-achievements__head">
        <span class="steam-achievements__title">Logros</span>
        <span class="steam-achievements__count">${earnedCount} / ${all.length} desbloqueados</span>
      </div>
      ${bodyHtml}
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
