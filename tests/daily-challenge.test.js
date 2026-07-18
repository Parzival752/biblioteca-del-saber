import { describe, it, expect, beforeEach } from 'vitest';
import { resetProgress, setActiveCourse } from '../js/storage.js';
import { getDailyChallenge, getDailyChallengeLesson } from '../js/daily-challenge.js';

describe('Desafío diario multi-saber', () => {
  beforeEach(() => {
    localStorage.clear();
    resetProgress();
  });

  it('usa lecciones reales en saberes de 50 (no cae a JS)', () => {
    for (const courseId of ['linux', 'biologia', 'fotografia', 'astronomia']) {
      setActiveCourse(courseId);
      const ch = getDailyChallenge();
      expect(ch.courseId).toBe(courseId);
      expect(ch.lessonId).toBeTruthy();
      const lesson = getDailyChallengeLesson();
      expect(lesson).toBeTruthy();
      expect(lesson.id).toBe(ch.lessonId);
    }
  });

  it('mantiene retos curados de javascript', () => {
    setActiveCourse('javascript');
    const ch = getDailyChallenge();
    expect(ch.lessonId).toMatch(/^l\d/);
    expect(getDailyChallengeLesson()?.id).toBe(ch.lessonId);
  });
});
