import { describe, it, expect, beforeEach } from 'vitest';
import {
  importBackup, exportBackupJson, parseBackupFile, getFullBackup,
  getBackupSummary, setStudentName, markComplete, setActiveCourse,
  resetProgress, BACKUP_VERSION,
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

  it('rechaza archivos inválidos', () => {
    expect(() => parseBackupFile('no json')).toThrow();
    expect(() => parseBackupFile('{}')).toThrow();
    expect(() => parseBackupFile(JSON.stringify({ app: 'otro', profile: {}, courses: {} }))).toThrow();
  });
});
