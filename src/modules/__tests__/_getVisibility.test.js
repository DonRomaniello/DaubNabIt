import { _getVisibility } from '../_getVisibility';

describe('_getVisibility', () => {
  test('returns true for white (light background needs black text)', () => {
    expect(_getVisibility('#ffffff')).toBe(true);
  });

  test('returns false for black (dark background needs white text)', () => {
    expect(_getVisibility('#000000')).toBe(false);
  });

  test('returns false for saturated blue', () => {
    expect(_getVisibility('#0000ff')).toBe(false);
  });

  test('returns true for bright yellow', () => {
    expect(_getVisibility('#ffff00')).toBe(true);
  });
});
