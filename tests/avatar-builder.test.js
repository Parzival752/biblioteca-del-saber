import { describe, it, expect, beforeEach } from 'vitest';
import {
  buildAvatarSvg, normalizeAvatarConfig, avatarConfigToSrc, isCustomAvatarId,
  createCustomAvatarId, renderAvatarBuilderHtml, randomAvatarConfig,
} from '../js/avatar-builder.js';
import {
  upsertCustomAvatar, getCustomAvatars, getCustomAvatar, removeCustomAvatar,
  setAvatarId, getAvatarId, resetProgress, exportBackupJson, importBackup,
} from '../js/storage.js';
import { getAvatarMeta, renderAvatarPicker } from '../js/profile.js';

describe('Constructor de avatares', () => {
  beforeEach(() => {
    localStorage.clear();
    resetProgress();
  });

  it('genera SVG válido con viewBox 64', () => {
    const svg = buildAvatarSvg({ label: 'Test', bg: 'ocean', hair: 'spiky' });
    expect(svg).toContain('viewBox="0 0 64 64"');
    expect(svg).toContain('<svg');
    expect(svg).toContain('Test');
  });

  it('normaliza opciones inválidas', () => {
    const cfg = normalizeAvatarConfig({ hair: 'invalid', bg: 'nope', label: '  Luna  ' });
    expect(cfg.hair).toBeTruthy();
    expect(cfg.bg).not.toBe('nope');
    expect(cfg.label).toBe('Luna');
  });

  it('data URI para imagen', () => {
    const src = avatarConfigToSrc({ label: 'X' });
    expect(src.startsWith('data:image/svg+xml,')).toBe(true);
  });

  it('ids personalizados', () => {
    expect(isCustomAvatarId('custom-abc')).toBe(true);
    expect(isCustomAvatarId('alebrije')).toBe(false);
    expect(createCustomAvatarId().startsWith('custom-')).toBe(true);
  });

  it('UI del constructor incluye controles mejorados', () => {
    const html = renderAvatarBuilderHtml();
    expect(html).toContain('Crear tu avatar');
    expect(html).toContain('data-ab-field="horns"');
    expect(html).toContain('id="abRandom"');
    expect(html).toContain('data-ab-tab="alebrije"');
    expect(html).toContain('id="abSave"');
  });

  it('paneles usan atributo hidden, no clase global .hidden', () => {
    const html = renderAvatarBuilderHtml();
    expect(html).toContain('data-ab-tab-panel="body" hidden');
    expect(html).toContain('data-ab-tab-panel="face"');
    expect(html).not.toContain('ab-tab-panel hidden');
  });

  it('aleatorio genera config válida', () => {
    const cfg = randomAvatarConfig({ label: 'Test' });
    expect(cfg.label).toBe('Test');
    expect(buildAvatarSvg(cfg)).toContain('<svg');
  });
});

describe('Avatares personalizados en storage', () => {
  beforeEach(() => {
    localStorage.clear();
    resetProgress();
  });

  it('guarda y recupera avatar custom', () => {
    const saved = upsertCustomAvatar({
      id: 'custom-test1',
      label: 'Mi alebrije',
      config: { hair: 'mohawk', accent: '#f472b6' },
    });
    expect(saved.id).toBe('custom-test1');
    expect(getCustomAvatars()).toHaveLength(1);
    expect(getCustomAvatar('custom-test1')?.label).toBe('Mi alebrije');
  });

  it('getAvatarMeta resuelve avatar custom', () => {
    upsertCustomAvatar({
      id: 'custom-fox',
      label: 'Zorro rosa',
      config: { accent: '#f472b6' },
    });
    setAvatarId('custom-fox');
    const meta = getAvatarMeta(getAvatarId());
    expect(meta.label).toBe('Zorro rosa');
    expect(meta.src.startsWith('data:image/svg+xml,')).toBe(true);
  });

  it('picker muestra predeterminados y botón crear', () => {
    upsertCustomAvatar({ id: 'custom-a', label: 'A', config: {} });
    const html = renderAvatarPicker('custom-a');
    expect(html).toContain('Predeterminados');
    expect(html).toContain('Tus avatares');
    expect(html).toContain('data-avatar-action="create"');
    expect(html).toContain('data-avatar-id="custom-a"');
    expect(html).toContain('data-avatar-delete="custom-a"');
  });

  it('backup incluye avatares personalizados', () => {
    upsertCustomAvatar({ id: 'custom-backup', label: 'Backup', config: { hair: 'long' } });
    const json = exportBackupJson();
    resetProgress();
    expect(getCustomAvatars()).toHaveLength(0);
    importBackup(JSON.parse(json));
    expect(getCustomAvatars()).toHaveLength(1);
    expect(getCustomAvatar('custom-backup')?.label).toBe('Backup');
  });

  it('eliminar avatar custom', () => {
    upsertCustomAvatar({ id: 'custom-del', label: 'Borrar', config: {} });
    setAvatarId('custom-del');
    removeCustomAvatar('custom-del');
    expect(getCustomAvatars()).toHaveLength(0);
    expect(getAvatarId()).toBe('alebrije');
  });
});
