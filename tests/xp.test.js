import { describe, it, expect, beforeEach } from 'vitest';
import {
  resetProgress, setActiveCourse, markComplete, markQuizPassed,
  markDailyChallengeDoneStorage, getFullBackup,
  XP_PER_LESSON, XP_PER_QUIZ, XP_DAILY_BONUS, XP_BONUS_NO_HINT,
} from '../js/storage.js';

describe('XP y recalc', () => {
  beforeEach(() => {
    localStorage.clear();
    resetProgress();
    setActiveCourse('javascript');
  });

  it('conserva XP de quiz tras completar otra lección', () => {
    markComplete('l01-hola');
    markQuizPassed('l01-hola');
    const afterQuiz = getFullBackup().courses.javascript.xp;
    expect(afterQuiz).toBe(XP_PER_LESSON + XP_PER_QUIZ + XP_BONUS_NO_HINT);

    markComplete('l02-vars');
    const afterNext = getFullBackup().courses.javascript.xp;
    expect(afterNext).toBe(2 * XP_PER_LESSON + XP_PER_QUIZ + 2 * XP_BONUS_NO_HINT);
  });

  it('conserva bonus del reto diario tras completar lección', () => {
    markComplete('l01-hola');
    markDailyChallengeDoneStorage();
    expect(getFullBackup().courses.javascript.xp).toBe(
      XP_PER_LESSON + XP_BONUS_NO_HINT + XP_DAILY_BONUS,
    );

    markComplete('l02-vars');
    expect(getFullBackup().courses.javascript.xp).toBe(
      2 * XP_PER_LESSON + 2 * XP_BONUS_NO_HINT + XP_DAILY_BONUS,
    );
  });
});
