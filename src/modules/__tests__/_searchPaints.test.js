import { _searchPaints, _clearSearchCache } from '../_searchPaints';
import { _setRGBData } from '../_setRGBData';

const paint = (hex, brand, name) => ({
  hex,
  brand,
  name,
  label: name,
  rgb: _setRGBData(hex),
});

const samplePaints = [
  paint('#ffffff', 'behr', 'White'),
  paint('#fefefe', 'behr', 'Off-White'),
  paint('#000000', 'behr', 'Black'),
  paint('#ff0000', 'ppg', 'Red'),
  paint('#00ff00', 'ppg', 'Green'),
];

describe('_searchPaints', () => {
  beforeEach(() => _clearSearchCache());

  test('returns the closest match first', () => {
    const target = _setRGBData('#ffffff');
    const result = _searchPaints(target, { paints: samplePaints, brand: 'all' });
    expect(result[0].paint.name).toBe('White');
    expect(result[0].closeness).toBe(0);
  });

  test('respects brand filter', () => {
    const target = _setRGBData('#ffffff');
    const result = _searchPaints(target, { paints: samplePaints, brand: 'ppg' });
    const names = result.map((r) => r.paint.name);
    expect(names).not.toContain('White');
    expect(names).toContain('Red');
    expect(names).toContain('Green');
  });

  test('treats "all brands" label as no filter', () => {
    const target = _setRGBData('#ffffff');
    const r1 = _searchPaints(target, { paints: samplePaints, brand: 'all brands' });
    const r2 = _searchPaints(target, { paints: samplePaints, brand: 'all' });
    expect(r1.map((r) => r.paint.name)).toEqual(r2.map((r) => r.paint.name));
  });

  test('returns cached result on second call', () => {
    const target = _setRGBData('#ffffff');
    const a = _searchPaints(target, { paints: samplePaints, brand: 'all' });
    const b = _searchPaints(target, { paints: samplePaints, brand: 'all' });
    expect(a).toBe(b);
  });

  test('orders by ascending closeness', () => {
    const target = _setRGBData('#ffffff');
    const result = _searchPaints(target, { paints: samplePaints, brand: 'all' });
    for (let i = 1; i < result.length; i++) {
      expect(result[i].closeness).toBeGreaterThanOrEqual(result[i - 1].closeness);
    }
  });
});
