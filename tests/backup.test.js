import { describe, it, expect, beforeEach } from 'vitest';
import {
  importBackup, exportBackupJson, parseBackupFile, getFullBackup,
  getBackupSummary, setStudentName, markComplete, setActiveCourse,
  resetProgress, BACKUP_VERSION, saveCodeDraft, markQuizPassed,
  recordAttempt, recordHintUsed, setTheme, setFontSize, setBeginnerMode,
  upsertCustomAvatar, loadProgress, markPerfectLesson,
  getCodeDraft, getActiveCourseId,
} from '../js/storage.js';

describe('Copia de seguridad export/import', () => {
  beforeEach(() => {
    localStorage.clear();
    resetProgress();
  });

  it('exporta estructura válida con versión y app', () => {
    setStudentName('Luna');
    setActiveCourse('javascript');
    markComplete('l01-hola');
    const backup = getFullBackup();
    expect(backup.version).toBe(BACKUP_VERSION);
    expect(backup.app).toBe('biblioteca-del-saber');
    expect(backup.profile.studentName).toBe('Luna');
    expect(backup.courses.javascript.completed).toContain('l01-hola');
  });

  it('round-trip export → import conserva progreso', () => {
    setStudentName('TestUser');
    setActiveCourse('biologia');
    markComplete('bio-l001');
    const json = exportBackupJson();
    resetProgress();
    importBackup(parseBackupFile(json));
    const summary = getBackupSummary();
    expect(summary.name).toBe('TestUser');
    expect(summary.totalCompleted).toBeGreaterThanOrEqual(1);
  });

  it('conserva multi-curso, borradores, XP, quizzes, intentos y ajustes', () => {
    setStudentName('Parzival752');
    setTheme('light');
    setFontSize('lg');
    setBeginnerMode(false);
    setActiveCourse('javascript');
    markComplete('l01-hola', { usedHint: false });
    saveCodeDraft('l01-hola', 'console.log("hola")');
    recordAttempt('l01-hola', { success: true, message: 'ok' });
    recordHintUsed('l02-vars', 2);
    markQuizPassed('l01-hola');
    markPerfectLesson('l01-hola');

    setActiveCourse('linux');
    markComplete('linux-l001');
    saveCodeDraft('linux-l001', 'ls -la');

    upsertCustomAvatar({
      id: 'custom-test-1',
      label: 'Mi alebrije',
      config: { face: 'round', skin: '#f0c4a0' },
    });

    const before = getFullBackup();
    const jsXp = before.courses.javascript.xp;
    const linuxXp = before.courses.linux.xp;
    expect(jsXp).toBeGreaterThan(0);
    expect(linuxXp).toBeGreaterThan(0);

    const json = exportBackupJson();
    resetProgress();
    expect(getBackupSummary().totalCompleted).toBe(0);

    importBackup(parseBackupFile(json));
    const after = getFullBackup();

    expect(after.profile.studentName).toBe('Parzival752');
    expect(after.profile.theme).toBe('light');
    expect(after.profile.fontSize).toBe('lg');
    expect(after.profile.beginnerMode).toBe(false);
    expect(after.profile.perfectLessons).toContain('l01-hola');
    expect(after.profile.customAvatars.some((a) => a.id === 'custom-test-1')).toBe(true);

    expect(after.courses.javascript.completed).toContain('l01-hola');
    expect(after.courses.javascript.codeDrafts['l01-hola']).toBe('console.log("hola")');
    expect(after.courses.javascript.quizzesPassed).toContain('l01-hola');
    expect(after.courses.javascript.attempts['l01-hola']).toBeGreaterThanOrEqual(1);
    expect(after.courses.javascript.hintLevels['l02-vars']).toBe(2);
    expect(after.courses.javascript.xp).toBe(jsXp);

    expect(after.courses.linux.completed).toContain('linux-l001');
    expect(after.courses.linux.codeDrafts['linux-l001']).toBe('ls -la');
    expect(after.courses.linux.xp).toBe(linuxXp);

    setActiveCourse('javascript');
    expect(getActiveCourseId()).toBe('javascript');
    expect(getCodeDraft('l01-hola')).toBe('console.log("hola")');
    expect(loadProgress().completed).toContain('l01-hola');
  });

  it('repara campos corruptos sin perder el resto', () => {
    const data = {
      app: 'biblioteca-del-saber',
      version: 1,
      profile: {
        studentName: 'Sano',
        activeCourse: 'flora',
        onboardingDone: true,
        tourDone: false,
        perfectLessons: 'no-array',
        customAvatars: [{ id: 'custom-x', label: 'X', config: {} }, null, 'bad'],
      },
      courses: {
        flora: {
          completed: ['flora-l001', 123, null],
          codeDrafts: null,
          attempts: null,
          xp: '50',
          quizzesPassed: ['flora-l001'],
        },
      },
    };
    importBackup(data);
    const root = getFullBackup();
    expect(root.profile.studentName).toBe('Sano');
    expect(root.profile.onboardingDone.flora).toBe(true);
    expect(root.profile.perfectLessons).toEqual([]);
    expect(root.profile.customAvatars).toHaveLength(1);
    expect(root.courses.flora.completed).toEqual(['flora-l001']);
    expect(root.courses.flora.codeDrafts).toEqual({});
    expect(root.courses.flora.attempts).toEqual({});
    expect(root.courses.flora.xp).toBe(50);
  });

  it('rechaza archivos inválidos', () => {
    expect(() => parseBackupFile('no json')).toThrow();
    expect(() => parseBackupFile('{}')).toThrow();
    expect(() => parseBackupFile(JSON.stringify({ app: 'otro', profile: {}, courses: {} }))).toThrow();
  });
});
