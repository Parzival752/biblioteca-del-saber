import { describe, it, expect } from 'vitest';
import {
  LEGAL_SECTIONS, LEGAL_LINKS, getLegalModalHtml, renderWelcomeLegalFooterHtml, renderAboutNoteHtml, LEGAL_VERSION,
} from '../js/legal.js';

describe('Documentación legal', () => {
  it('incluye 8 secciones legales', () => {
    expect(Object.keys(LEGAL_SECTIONS).length).toBe(8);
    expect(LEGAL_LINKS.length).toBe(8);
  });

  it('incluye donaciones voluntarias sin contraprestación', () => {
    const html = getLegalModalHtml('donations');
    expect(html).toContain('Donaciones voluntarias');
    expect(html).toContain('sin contraprestación');
    expect(html).toContain('no otorga');
    expect(html).toContain('gratuito');
  });

  it('pie de página legal con todos los documentos', () => {
    const footer = renderWelcomeLegalFooterHtml();
    expect(footer).toContain('100 % gratuito');
    expect(footer).toContain('data-legal="terms"');
    expect(footer).toContain('Documentos legales');
    expect(footer).toContain('welcome-footer__btn');
  });

  it('cada modal incluye cláusula de aceptación', () => {
    const html = getLegalModalHtml('terms');
    expect(html).toContain('aceptas íntegramente');
    expect(html).toContain('legal-doc__accept');
  });

  it('mensaje del creador visible al inicio', () => {
    const about = renderAboutNoteHtml();
    expect(about).toContain('¿Por qué existe esta web?');
    expect(about).toContain('TDAH');
    expect(about).toContain('inteligencia artificial');
  });

  it('cada sección genera modal con versión', () => {
    for (const { id } of LEGAL_LINKS) {
      const html = getLegalModalHtml(id);
      expect(html).toContain(LEGAL_VERSION);
      expect(html.length).toBeGreaterThan(200);
    }
  });
});
