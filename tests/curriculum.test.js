import { describe, it, expect } from 'vitest';
import {
  getLessonCount, getCurriculum, COURSES, getTotalLessonsAllCourses, isCodeCourse,
} from '../js/courses/registry.js';
import { getAllLessons, getNextLesson, getPrevLesson } from '../js/curriculum.js';

describe('La Biblioteca del Saber — curriculum unificado', () => {
  it('tiene 30 cursos registrados (8 programación código + 22 saberes quiz)', () => {
    expect(COURSES.length).toBe(30);
    const code = COURSES.filter((c) => isCodeCourse(c.id));
    const quiz = COURSES.filter((c) => !isCodeCourse(c.id));
    expect(code.length).toBe(8);
    expect(quiz.length).toBe(22);
  });

  it('tiene 1258 lecciones en total', () => {
    expect(getTotalLessonsAllCourses()).toBe(1258);
  });

  it('cursos de programación tienen editor de código', () => {
    for (const c of COURSES.filter((x) => isCodeCourse(x.id))) {
      expect(c.exerciseType).toBe('code');
      expect(c.runner).toBeTruthy();
      expect(getLessonCount(c.id)).toBeGreaterThan(0);
    }
  });

  it('cursos de naturaleza y saberes tienen 50 lecciones con quiz cada uno', () => {
    for (const c of COURSES.filter((x) => !isCodeCourse(x.id))) {
      expect(getLessonCount(c.id)).toBe(50);
      const curriculum = getCurriculum(c.id);
      expect(curriculum.length).toBe(5);
      for (const l of curriculum.flatMap((m) => m.lessons)) {
        expect(l.exercise?.questions?.length).toBeGreaterThan(0);
      }
    }
  });

  it('navegación siguiente/anterior en JavaScript y Biología', () => {
    for (const courseId of ['javascript', 'biologia']) {
      const lessons = getAllLessons(courseId);
      expect(lessons.length).toBeGreaterThan(1);
      const first = lessons[0];
      const second = getNextLesson(first.id, courseId);
      expect(second?.id).toBe(lessons[1].id);
      expect(getPrevLesson(second.id, courseId)?.id).toBe(first.id);
    }
  });
});
