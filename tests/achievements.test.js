import { describe, it, expect } from 'vitest';
import { getBadgesCount, getAchievements, getBadgesForCourse } from '../js/gamification.js';
import { getLessonCount } from '../js/courses/registry.js';

describe('Logros por saber', () => {
  it('cursos de 50 lecciones tienen al menos 30 logros', () => {
    const n = getLessonCount('linux');
    expect(n).toBe(50);
    expect(getBadgesCount('linux', n)).toBeGreaterThanOrEqual(30);
  });

  it('cursos cortos solo tienen generales (menos de 30)', () => {
    const n = getLessonCount('javascript');
    expect(n).toBeLessThan(50);
    expect(getBadgesCount('javascript', n)).toBeLessThan(30);
  });

  it('a mitad de camino usa el 50% del curso', () => {
    const half = getBadgesForCourse('javascript', 26).find((b) => b.id === 'half');
    expect(half).toBeTruthy();
    const state = { completed: Array.from({ length: 13 }, (_, i) => `x${i}`) };
    const list = getAchievements(state, 26, 'javascript');
    const h = list.find((b) => b.id === 'half');
    expect(h.target).toBe(13);
    expect(h.earned).toBe(true);
  });

  it('perfectos de un curso no cuentan en otro', () => {
    const stateJs = { completed: [], perfectLessons: ['l01-hola', 'l02-vars', 'l03-x'] };
    const stateLinux = { completed: [], perfectLessons: [] };
    const js = getAchievements(stateJs, 26, 'javascript').find((b) => b.id === 'perfect');
    const lx = getAchievements(stateLinux, 50, 'linux').find((b) => b.id === 'perfect');
    expect(js.earned).toBe(true);
    expect(lx.earned).toBe(false);
  });
});
