/**
 * Storage v4 — perfil global + progreso por curso/lenguaje
 */
import { getCourseMeta, getLessonCount, COURSES, getCurriculum } from './courses/registry.js';
import { MAX_CUSTOM_AVATARS } from './avatar-builder.js';

const STORAGE_KEY = 'biblioteca-del-saber-v1';
const LEGACY_KEYS = ['aprende-js-v4', 'aprende-js-v3', 'super-maestro-v2', 'super-maestro-v1'];

export const XP_PER_LESSON = 50;
export const XP_BONUS_NO_HINT = 15;
export const XP_PER_QUIZ = 10;
export const XP_DAILY_BONUS = 25;

const defaultCourseState = () => ({
  completed: [],
  lastLesson: null,
  codeDrafts: {},
  startedAt: Date.now(),
  xp: 0,
  attempts: {},
  hintsUsed: {},
  hintLevels: {},
  noHintLessons: [],
  totalAttempts: 0,
  attemptHistory: {},
  lessonTimeMs: {},
  dailyChallengeDate: null,
  dailyChallengeDone: false,
  dailyBonusXp: 0,
  quizzesPassed: [],
  perfectLessons: [],
});

const defaultProfile = () => ({
  activeCourse: 'javascript',
  studentName: '',
  avatarId: 'alebrije',
  profileSetupDone: false,
  theme: 'dark',
  fontSize: 'md',
  focusMode: false,
  beginnerMode: true,
  streak: 0,
  lastStudyDate: null,
  onboardingDone: {},
  tourDone: {},
  studiedAtNight: false,
  /** @deprecated migrado a course.perfectLessons */
  perfectLessons: [],
  studyingCourses: [],
  customAvatars: [],
});

function defaultRoot() {
  return {
    profile: defaultProfile(),
    courses: {
      javascript: { ...defaultCourseState() },
    },
  };
}

function migrateV3() {
  for (const key of LEGACY_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const old = JSON.parse(raw);
      const profile = defaultProfile();
      const course = defaultCourseState();
      const profileKeys = new Set([
        'theme', 'fontSize', 'focusMode', 'studentName', 'avatarId', 'profileSetupDone',
        'beginnerMode', 'streak', 'lastStudyDate', 'studiedAtNight', 'perfectLessons',
      ]);
      for (const [k, v] of Object.entries(old)) {
        if (profileKeys.has(k)) profile[k] = v;
        else if (k === 'onboardingDone') profile.onboardingDone = { javascript: !!v };
        else if (k === 'tourDone') profile.tourDone = { javascript: !!v };
        else course[k] = v;
      }
      delete course.certificateId;
      profile.activeCourse = 'javascript';
      return { profile, courses: { javascript: course } };
    } catch { /* next */ }
  }
  return null;
}

function loadRoot() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const migrated = migrateV3();
      if (migrated) {
        saveRoot(migrated);
        return migrated;
      }
      return defaultRoot();
    }
    const parsed = JSON.parse(raw);
    const root = {
      profile: { ...defaultProfile(), ...parsed.profile },
      courses: parsed.courses || {},
    };
    const cid = root.profile.activeCourse || 'javascript';
    if (!root.courses[cid]) {
      root.courses[cid] = { ...defaultCourseState() };
    }
    if (!root.profile.studyingCourses?.length) {
      const derived = Object.entries(root.courses)
        .filter(([, s]) => (s.completed?.length > 0) || s.lastLesson)
        .map(([id]) => id);
      root.profile.studyingCourses = derived.length ? derived : [cid];
    }
    for (const id of Object.keys(root.courses)) ensureCourse(root, id);
    const hadLegacyPerfect = Array.isArray(root.profile.perfectLessons) && root.profile.perfectLessons.length > 0;
    migratePerfectLessonsToCourses(root);
    for (const id of Object.keys(root.courses)) recalcXp(root.courses[id]);
    if (hadLegacyPerfect) saveRoot(root);
    return root;
  } catch {
    return defaultRoot();
  }
}

function saveRoot(root) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(root));
}

function lessonIdsForCourse(courseId) {
  try {
    return new Set(
      (getCurriculum(courseId) || []).flatMap((m) => (m.lessons || []).map((l) => l.id)),
    );
  } catch {
    return new Set();
  }
}

function migratePerfectLessonsToCourses(root) {
  const legacy = Array.isArray(root.profile.perfectLessons) ? root.profile.perfectLessons : [];
  if (!legacy.length) return;
  for (const lessonId of legacy) {
    if (typeof lessonId !== 'string') continue;
    for (const [cid, course] of Object.entries(root.courses)) {
      if (!lessonIdsForCourse(cid).has(lessonId)) continue;
      course.perfectLessons = Array.isArray(course.perfectLessons) ? course.perfectLessons : [];
      if (!course.perfectLessons.includes(lessonId)) course.perfectLessons.push(lessonId);
    }
  }
  root.profile.perfectLessons = [];
}

function ensureCourse(root, courseId) {
  if (!root.courses[courseId]) {
    root.courses[courseId] = { ...defaultCourseState() };
  }
  const course = root.courses[courseId];
  if (!Array.isArray(course.perfectLessons)) course.perfectLessons = [];
  if (course.dailyBonusXp == null) course.dailyBonusXp = 0;
  return course;
}

function mutateCourse(fn) {
  const root = loadRoot();
  const cid = root.profile.activeCourse || 'javascript';
  const course = ensureCourse(root, cid);
  fn(course, root.profile, cid);
  saveRoot(root);
}

export function getActiveCourseId() {
  return loadRoot().profile.activeCourse || 'javascript';
}

export function setActiveCourse(courseId) {
  const root = loadRoot();
  root.profile.activeCourse = courseId;
  ensureCourse(root, courseId);
  const list = new Set(root.profile.studyingCourses || []);
  list.add(courseId);
  root.profile.studyingCourses = COURSES.map((c) => c.id).filter((id) => list.has(id));
  saveRoot(root);
}

export function getCourseProgressSummary(courseId) {
  const root = loadRoot();
  const c = root.courses[courseId] || defaultCourseState();
  const total = getLessonCount(courseId);
  const completed = (c.completed || []).length;
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0,
    xp: c.xp || 0,
    lastLesson: c.lastLesson,
    hasProgress: !!(completed > 0 || c.lastLesson),
  };
}

/** Cursos en los que el estudiante esta inscrito o tiene progreso */
export function getStudyingCourseIds() {
  const root = loadRoot();
  const ids = new Set(root.profile.studyingCourses || []);
  for (const [id, state] of Object.entries(root.courses || {})) {
    if ((state.completed?.length > 0) || state.lastLesson) ids.add(id);
  }
  const active = root.profile.activeCourse || 'javascript';
  if (!ids.size) ids.add(active);
  return COURSES.map((c) => c.id).filter((id) => ids.has(id));
}

export function enrollInCourse(courseId) {
  const root = loadRoot();
  ensureCourse(root, courseId);
  const list = new Set(root.profile.studyingCourses || []);
  list.add(courseId);
  root.profile.studyingCourses = COURSES.map((c) => c.id).filter((id) => list.has(id));
  saveRoot(root);
}

/** Resumen de progreso por lenguaje para perfil y dashboard */
export function getMultiCourseOverview() {
  const root = loadRoot();
  const active = root.profile.activeCourse || 'javascript';
  return getStudyingCourseIds().map((courseId) => {
    const meta = getCourseMeta(courseId);
    const summary = getCourseProgressSummary(courseId);
    let status = 'nuevo';
    if (summary.percent >= 100) status = 'completado';
    else if (summary.hasProgress) status = 'en_progreso';
    return {
      id: courseId,
      name: meta.name,
      color: meta.color,
      icon: meta.icon,
      tagline: meta.tagline,
      isActive: courseId === active,
      status,
      ...summary,
    };
  });
}

export function getAggregateStats() {
  const overview = getMultiCourseOverview();
  return {
    coursesCount: overview.length,
    totalXp: overview.reduce((n, c) => n + (c.xp || 0), 0),
    totalCompleted: overview.reduce((n, c) => n + c.completed, 0),
    totalLessons: overview.reduce((n, c) => n + c.total, 0),
  };
}

/** Vista fusionada para compatibilidad con el resto de la app */
export function loadProgress() {
  const root = loadRoot();
  const cid = root.profile.activeCourse || 'javascript';
  const course = ensureCourse(root, cid);
  const onboard = root.profile.onboardingDone?.[cid] ?? false;
  const tour = root.profile.tourDone?.[cid] ?? false;
  return {
    ...root.profile,
    ...course,
    activeCourse: cid,
    onboardingDone: onboard,
    tourDone: tour,
  };
}

function recalcXp(course) {
  const base = (course.completed?.length || 0) * XP_PER_LESSON;
  const noHint = (course.noHintLessons || []).filter((id) => course.completed.includes(id)).length * XP_BONUS_NO_HINT;
  const quizzes = (course.quizzesPassed || []).length * XP_PER_QUIZ;
  const daily = Number(course.dailyBonusXp) || 0;
  course.xp = base + noHint + quizzes + daily;
}

export function markComplete(lessonId, { usedHint = false } = {}) {
  let isNew = false;
  mutateCourse((course) => {
    isNew = !course.completed.includes(lessonId);
    if (isNew) {
      course.completed.push(lessonId);
      if (!usedHint && !course.noHintLessons.includes(lessonId)) course.noHintLessons.push(lessonId);
      recalcXp(course);
    }
  });
  return { state: loadProgress(), isNew };
}

export function recordAttempt(lessonId, { success = false, message = '' } = {}) {
  let count = 0;
  mutateCourse((course) => {
    course.attempts[lessonId] = (course.attempts[lessonId] || 0) + 1;
    course.totalAttempts = (course.totalAttempts || 0) + 1;
    if (!course.attemptHistory[lessonId]) course.attemptHistory[lessonId] = [];
    course.attemptHistory[lessonId].push({ at: Date.now(), success, message: message.slice(0, 120) });
    if (course.attemptHistory[lessonId].length > 20) course.attemptHistory[lessonId].shift();
    count = course.attempts[lessonId];
  });
  return count;
}

export function recordHintUsed(lessonId, level = 1) {
  mutateCourse((course) => {
    course.hintsUsed[lessonId] = true;
    course.hintLevels[lessonId] = Math.max(course.hintLevels[lessonId] || 0, level);
  });
}

export function getHintLevel(lessonId) {
  return loadProgress().hintLevels[lessonId] || 0;
}

export function getAttempts(lessonId) {
  return loadProgress().attempts[lessonId] || 0;
}

export function getAttemptHistory(lessonId) {
  return loadProgress().attemptHistory[lessonId] || [];
}

export function addLessonTime(lessonId, ms) {
  mutateCourse((course) => {
    course.lessonTimeMs[lessonId] = (course.lessonTimeMs[lessonId] || 0) + ms;
  });
}

export function markQuizPassed(lessonId) {
  mutateCourse((course) => {
    if (!course.quizzesPassed.includes(lessonId)) {
      course.quizzesPassed.push(lessonId);
      recalcXp(course);
    }
  });
}

export function setLastLesson(lessonId) {
  mutateCourse((course) => { course.lastLesson = lessonId; });
}

export function saveCodeDraft(lessonId, code) {
  mutateCourse((course) => { course.codeDrafts[lessonId] = code; });
}

export function getCodeDraft(lessonId) {
  return loadProgress().codeDrafts[lessonId];
}

export function setTheme(theme) {
  const root = loadRoot();
  root.profile.theme = theme;
  saveRoot(root);
}

export function getTheme() {
  return loadRoot().profile.theme || 'dark';
}

export function setFontSize(size) {
  const root = loadRoot();
  root.profile.fontSize = size;
  saveRoot(root);
}

export function getFontSize() {
  return loadRoot().profile.fontSize || 'md';
}

export function setFocusMode(on) {
  const root = loadRoot();
  root.profile.focusMode = on;
  saveRoot(root);
}

export function getFocusMode() {
  return !!loadRoot().profile.focusMode;
}

export function setBeginnerMode(on) {
  const root = loadRoot();
  root.profile.beginnerMode = on;
  saveRoot(root);
}

export function getBeginnerMode() {
  return loadRoot().profile.beginnerMode !== false;
}

export function setStudentName(name) {
  const root = loadRoot();
  root.profile.studentName = name.trim().slice(0, 24);
  saveRoot(root);
}

export function getStudentName() {
  return loadRoot().profile.studentName || '';
}

export function setAvatarId(id) {
  const root = loadRoot();
  root.profile.avatarId = id;
  saveRoot(root);
}

export function getAvatarId() {
  return loadRoot().profile.avatarId || 'alebrije';
}

export function getCustomAvatars() {
  return [...(loadRoot().profile.customAvatars || [])];
}

export function getCustomAvatar(id) {
  return getCustomAvatars().find((a) => a.id === id) || null;
}

export function upsertCustomAvatar({ id, label, config }) {
  const root = loadRoot();
  const list = [...(root.profile.customAvatars || [])];
  const normalized = {
    id: id || `custom-${Math.random().toString(36).slice(2, 8)}`,
    label: String(label || 'Mi avatar').trim().slice(0, 20) || 'Mi avatar',
    config,
    updatedAt: Date.now(),
  };
  const idx = list.findIndex((a) => a.id === normalized.id);
  if (idx >= 0) {
    list[idx] = { ...list[idx], ...normalized, createdAt: list[idx].createdAt || Date.now() };
  } else {
    if (list.length >= MAX_CUSTOM_AVATARS) throw new Error(`Máximo ${MAX_CUSTOM_AVATARS} avatares personalizados`);
    list.push({ ...normalized, createdAt: Date.now() });
  }
  root.profile.customAvatars = list;
  saveRoot(root);
  return normalized;
}

export function removeCustomAvatar(id) {
  const root = loadRoot();
  root.profile.customAvatars = (root.profile.customAvatars || []).filter((a) => a.id !== id);
  if (root.profile.avatarId === id) root.profile.avatarId = 'alebrije';
  saveRoot(root);
}

export function setProfileSetupDone() {
  const root = loadRoot();
  root.profile.profileSetupDone = true;
  saveRoot(root);
}

export function isProfileSetupDone() {
  return !!loadRoot().profile.profileSetupDone;
}

export function setOnboardingDone() {
  const root = loadRoot();
  const cid = root.profile.activeCourse || 'javascript';
  root.profile.onboardingDone = { ...root.profile.onboardingDone, [cid]: true };
  saveRoot(root);
}

export function setTourDone() {
  const root = loadRoot();
  const cid = root.profile.activeCourse || 'javascript';
  root.profile.tourDone = { ...root.profile.tourDone, [cid]: true };
  saveRoot(root);
}

export function resetLesson(lessonId) {
  mutateCourse((course) => {
    course.completed = course.completed.filter((id) => id !== lessonId);
    course.noHintLessons = course.noHintLessons.filter((id) => id !== lessonId);
    course.quizzesPassed = course.quizzesPassed.filter((id) => id !== lessonId);
    course.perfectLessons = (course.perfectLessons || []).filter((id) => id !== lessonId);
    delete course.codeDrafts[lessonId];
    delete course.attempts[lessonId];
    delete course.hintsUsed[lessonId];
    delete course.hintLevels[lessonId];
    delete course.attemptHistory[lessonId];
    recalcXp(course);
  });
  return loadProgress();
}

export function resetModule(lessonIds) {
  mutateCourse((course) => {
    const drop = new Set(lessonIds);
    for (const id of lessonIds) {
      course.completed = course.completed.filter((lid) => lid !== id);
      course.noHintLessons = course.noHintLessons.filter((lid) => lid !== id);
      course.quizzesPassed = course.quizzesPassed.filter((lid) => lid !== id);
      delete course.codeDrafts[id];
      delete course.attempts[id];
      delete course.hintsUsed[id];
      delete course.hintLevels[id];
      delete course.attemptHistory[id];
    }
    course.perfectLessons = (course.perfectLessons || []).filter((id) => !drop.has(id));
    recalcXp(course);
  });
  return loadProgress();
}

export function resetCourse({ keepName = true, keepTheme = true } = {}) {
  const root = loadRoot();
  const cid = root.profile.activeCourse || 'javascript';
  const prev = root.profile;
  root.courses[cid] = { ...defaultCourseState() };
  if (!keepName) {
    root.profile.studentName = '';
    root.profile.profileSetupDone = false;
  }
  if (!keepTheme) {
    root.profile.theme = 'dark';
    root.profile.fontSize = 'md';
  }
  root.profile.onboardingDone = { ...root.profile.onboardingDone, [cid]: false };
  root.profile.tourDone = { ...root.profile.tourDone, [cid]: false };
  saveRoot(root);
  LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
  return loadProgress();
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  LEGACY_KEYS.forEach((k) => localStorage.removeItem(k));
}

export function getCompletionRate(totalLessons) {
  const { completed } = loadProgress();
  return totalLessons ? Math.round((completed.length / totalLessons) * 100) : 0;
}

export function updateStudyStreak(state) {
  const root = loadRoot();
  const today = new Date().toISOString().slice(0, 10);
  if (root.profile.lastStudyDate === today) return loadProgress();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yKey = yesterday.toISOString().slice(0, 10);
  root.profile.streak = root.profile.lastStudyDate === yKey ? (root.profile.streak || 0) + 1 : 1;
  root.profile.lastStudyDate = today;
  saveRoot(root);
  return loadProgress();
}

export function isLessonComplete(lessonId) {
  return loadProgress().completed.includes(lessonId);
}

export function getStats(totalLessons) {
  const s = loadProgress();
  const totalTime = Object.values(s.lessonTimeMs || {}).reduce((a, b) => a + b, 0);
  return {
    completed: s.completed.length,
    total: totalLessons,
    xp: s.xp || 0,
    streak: s.streak || 0,
    totalAttempts: s.totalAttempts || 0,
    totalTimeMin: Math.round(totalTime / 60000),
    quizzesPassed: (s.quizzesPassed || []).length,
  };
}

export function markPerfectLesson(lessonId) {
  mutateCourse((course) => {
    course.perfectLessons = course.perfectLessons || [];
    if (!course.perfectLessons.includes(lessonId)) {
      course.perfectLessons.push(lessonId);
    }
  });
}

export function recordStudyTime() {
  const hour = new Date().getHours();
  if (hour < 22 && hour >= 5) return;
  const root = loadRoot();
  root.profile.studiedAtNight = true;
  saveRoot(root);
}

export function markDailyChallengeDoneStorage() {
  const today = new Date().toISOString().slice(0, 10);
  mutateCourse((course) => {
    if (course.dailyChallengeDate === today && course.dailyChallengeDone) return;
    course.dailyChallengeDate = today;
    course.dailyChallengeDone = true;
    course.dailyBonusXp = (Number(course.dailyBonusXp) || 0) + XP_DAILY_BONUS;
    recalcXp(course);
  });
}

/** Copia de seguridad — perfil, cursos, XP, ajustes, borradores, avatares */
export const BACKUP_VERSION = 1;

function asArray(value, fallback = []) {
  return Array.isArray(value) ? value : fallback;
}

function asObject(value, fallback = {}) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
}

function normalizeDoneMap(value, activeCourse) {
  if (typeof value === 'boolean') {
    return value ? { [activeCourse || 'javascript']: true } : {};
  }
  return asObject(value);
}

function normalizeCourseState(raw) {
  const { certificateId: _drop, ...rest } = asObject(raw);
  const merged = { ...defaultCourseState(), ...rest };
  merged.completed = asArray(merged.completed).filter((id) => typeof id === 'string');
  merged.codeDrafts = asObject(merged.codeDrafts);
  merged.attempts = asObject(merged.attempts);
  merged.hintsUsed = asObject(merged.hintsUsed);
  merged.hintLevels = asObject(merged.hintLevels);
  merged.noHintLessons = asArray(merged.noHintLessons).filter((id) => typeof id === 'string');
  merged.attemptHistory = asObject(merged.attemptHistory);
  merged.lessonTimeMs = asObject(merged.lessonTimeMs);
  merged.quizzesPassed = asArray(merged.quizzesPassed).filter((id) => typeof id === 'string');
  merged.perfectLessons = asArray(merged.perfectLessons).filter((id) => typeof id === 'string');
  merged.totalAttempts = Number(merged.totalAttempts) || 0;
  merged.dailyBonusXp = Math.max(0, Number(merged.dailyBonusXp) || 0);
  merged.lastLesson = typeof merged.lastLesson === 'string' ? merged.lastLesson : null;
  merged.dailyChallengeDate = typeof merged.dailyChallengeDate === 'string' ? merged.dailyChallengeDate : null;
  merged.dailyChallengeDone = Boolean(merged.dailyChallengeDone);
  merged.startedAt = Number(merged.startedAt) || Date.now();
  recalcXp(merged);
  return merged;
}

function normalizeProfileState(raw) {
  const profile = { ...defaultProfile(), ...asObject(raw) };
  const active = typeof profile.activeCourse === 'string' ? profile.activeCourse : 'javascript';
  profile.activeCourse = active;
  profile.studentName = typeof profile.studentName === 'string' ? profile.studentName : '';
  profile.avatarId = typeof profile.avatarId === 'string' ? profile.avatarId : 'alebrije';
  profile.theme = profile.theme === 'light' ? 'light' : 'dark';
  profile.fontSize = ['sm', 'md', 'lg'].includes(profile.fontSize) ? profile.fontSize : 'md';
  profile.focusMode = Boolean(profile.focusMode);
  profile.beginnerMode = profile.beginnerMode !== false;
  profile.profileSetupDone = Boolean(profile.profileSetupDone);
  profile.streak = Math.max(0, Number(profile.streak) || 0);
  profile.lastStudyDate = typeof profile.lastStudyDate === 'string' ? profile.lastStudyDate : null;
  profile.studiedAtNight = Boolean(profile.studiedAtNight);
  profile.perfectLessons = asArray(profile.perfectLessons).filter((id) => typeof id === 'string');
  profile.onboardingDone = normalizeDoneMap(profile.onboardingDone, active);
  profile.tourDone = normalizeDoneMap(profile.tourDone, active);
  profile.studyingCourses = asArray(profile.studyingCourses).filter((id) => typeof id === 'string');
  profile.customAvatars = asArray(profile.customAvatars)
    .filter((a) => a && typeof a === 'object' && typeof a.id === 'string')
    .slice(0, MAX_CUSTOM_AVATARS);
  return profile;
}

export function getFullBackup() {
  const root = loadRoot();
  // Snapshot profundo: evita mutaciones posteriores al objeto exportado
  return JSON.parse(JSON.stringify({
    version: BACKUP_VERSION,
    app: 'biblioteca-del-saber',
    exportedAt: new Date().toISOString(),
    profile: root.profile,
    courses: root.courses,
  }));
}

export function exportBackupJson() {
  return JSON.stringify(getFullBackup(), null, 2);
}

function normalizeImportedRoot(data) {
  const root = {
    profile: normalizeProfileState(data.profile),
    courses: {},
  };
  for (const [id, state] of Object.entries(asObject(data.courses))) {
    if (typeof id !== 'string' || !id.trim()) continue;
    root.courses[id] = normalizeCourseState(state);
  }
  const cid = root.profile.activeCourse || 'javascript';
  if (!root.courses[cid]) {
    root.courses[cid] = { ...defaultCourseState() };
  }
  const list = new Set(root.profile.studyingCourses || []);
  for (const [id, state] of Object.entries(root.courses)) {
    if ((state.completed?.length > 0) || state.lastLesson) list.add(id);
  }
  list.add(cid);
  root.profile.studyingCourses = COURSES.map((c) => c.id).filter((id) => list.has(id));
  return root;
}

export function validateBackup(data) {
  if (!data || typeof data !== 'object') throw new Error('Archivo inválido');
  if (data.app && data.app !== 'biblioteca-del-saber') {
    throw new Error('Este archivo no pertenece a La Biblioteca del Saber');
  }
  if (!data.profile || typeof data.profile !== 'object') throw new Error('Falta el perfil');
  if (!data.courses || typeof data.courses !== 'object') throw new Error('Falta el progreso de cursos');
  if (!Object.keys(data.courses).length) throw new Error('No hay cursos guardados en el archivo');
  if (data.version != null && Number(data.version) > BACKUP_VERSION) {
    throw new Error('Esta copia es de una versión más nueva de la app. Actualiza La Biblioteca del Saber e inténtalo de nuevo.');
  }
  return data;
}

export function parseBackupFile(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error('El archivo no es JSON válido');
  }
  return validateBackup(data);
}

export function importBackup(data) {
  const validated = validateBackup(data);
  const root = normalizeImportedRoot(validated);
  saveRoot(root);
  return root;
}

export function getBackupSummary() {
  const overview = getMultiCourseOverview();
  const aggregate = getAggregateStats();
  return {
    name: getStudentName(),
    coursesCount: overview.length,
    totalCompleted: aggregate.totalCompleted,
    totalXp: aggregate.totalXp,
  };
}
