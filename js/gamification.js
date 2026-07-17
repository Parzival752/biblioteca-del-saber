export const BADGES = [
  { id: 'first', icon: '🚀', name: 'Primer paso', desc: 'Completa tu primera lección', check: (s) => s.completed.length >= 1 },
  { id: 'half', icon: '⚡', name: 'A mitad de camino', desc: 'Completa 10 lecciones', check: (s) => s.completed.length >= 10 },
  { id: 'graduate', icon: '🎓', name: 'Graduado', desc: 'Completa todo un saber', check: (s, t) => s.completed.length >= t },
  { id: 'streak3', icon: '🔥', name: 'Racha x3', desc: '3 días seguidos', check: (s) => s.streak >= 3 },
  { id: 'streak7', icon: '💪', name: 'Racha x7', desc: '7 días seguidos', check: (s) => s.streak >= 7 },
  { id: 'xp500', icon: '⭐', name: 'Estrella', desc: '500 XP', check: (s) => s.xp >= 500 },
  { id: 'noHints', icon: '🧠', name: 'Sin pistas', desc: '5 lecciones sin pistas', check: (s) => (s.noHintLessons || []).length >= 5 },
  { id: 'persistent', icon: '🎯', name: 'Persistente', desc: '20 intentos', check: (s) => s.totalAttempts >= 20 },
  { id: 'quiz5', icon: '📝', name: 'Quiz master', desc: '5 quizzes aprobados', check: (s) => (s.quizzesPassed || []).length >= 5 },
  { id: 'daily', icon: '📅', name: 'Desafío diario', desc: 'Completa el reto del día', check: (s) => s.dailyChallengeDone && s.dailyChallengeDate },
  { id: 'night', icon: '🌙', name: 'Noctámbulo', desc: 'Estudia después de las 22h', check: (s) => s.studiedAtNight },
  { id: 'perfect', icon: '💎', name: 'Perfeccionista', desc: '3 lecciones sin intentos fallidos previos', check: (s) => (s.perfectLessons || []).length >= 3 },
];

export const XP_PER_LESSON = 50;
export const XP_BONUS_NO_HINT = 15;

export function getEarnedBadges(state, totalLessons) {
  return BADGES.filter((b) => b.check(state, totalLessons));
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
