/** Acceso al currículo del curso activo */
import { getCurriculum, getCourseMeta, COURSES, getLessonCount, populateCourseSelect, filterCourses, isCodeCourse, renderCourseIcon, getTotalLessonsAllCourses } from './courses/registry.js';
import { getActiveCourseId } from './storage.js';

export {
  COURSES, getCourseMeta, getLessonCount, populateCourseSelect, filterCourses,
  isCodeCourse, renderCourseIcon, renderWelcomeChip, renderFeatureItem,
  getTotalLessonsAllCourses, COURSE_CATEGORIES,
} from './courses/registry.js';

export function getActiveCurriculum() {
  return getCurriculum(getActiveCourseId());
}

export function getAllLessons(courseId = getActiveCourseId()) {
  return getCurriculum(courseId).flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title })),
  );
}

export function getLessonById(id, courseId = getActiveCourseId()) {
  return getAllLessons(courseId).find((l) => l.id === id) ?? null;
}

export function getNextLesson(id, courseId = getActiveCourseId()) {
  const all = getAllLessons(courseId);
  const i = all.findIndex((l) => l.id === id);
  return i >= 0 && i < all.length - 1 ? all[i + 1] : null;
}

export function getPrevLesson(id, courseId = getActiveCourseId()) {
  const all = getAllLessons(courseId);
  const i = all.findIndex((l) => l.id === id);
  return i > 0 ? all[i - 1] : null;
}

export function getTotalLessons(courseId = getActiveCourseId()) {
  return getAllLessons(courseId).length;
}

export function getModuleForLesson(lessonId, courseId = getActiveCourseId()) {
  return getCurriculum(courseId).find((m) => m.lessons.some((l) => l.id === lessonId)) ?? null;
}

export function findLessonInAnyCourse(id) {
  for (const c of COURSES) {
    const lesson = getAllLessons(c.id).find((l) => l.id === id);
    if (lesson) return { lesson, courseId: c.id };
  }
  return null;
}

export function buildCourseSelectHtml(courses, selectedId, opts) {
  return courses.map((c) => {
    const prog = opts?.getProgress?.(c.id) ?? { completed: 0, hasProgress: false };
    const n = getLessonCount(c.id);
    const suffix = prog.hasProgress ? ` · ${prog.completed} hechas` : '';
    return `<option value="${c.id}"${c.id === selectedId ? ' selected' : ''}>${c.name} — ${n} lecciones${suffix}</option>`;
  }).join('');
}
