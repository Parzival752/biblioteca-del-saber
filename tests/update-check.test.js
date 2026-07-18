import { describe, it, expect } from 'vitest';
import { normalizeVersionId } from '../js/update-check.js';

describe('update-check', () => {
  it('normaliza ids de commit a 7 hex', () => {
    expect(normalizeVersionId('bf54d7e1c71c')).toBe('bf54d7e');
    expect(normalizeVersionId('BF54D7E')).toBe('bf54d7e');
    expect(normalizeVersionId('')).toBe('');
  });

  it('mismo prefijo corto coincide', () => {
    const a = normalizeVersionId('abc1234deadbeef');
    const b = normalizeVersionId('abc1234');
    expect(a).toBe(b);
  });
});
