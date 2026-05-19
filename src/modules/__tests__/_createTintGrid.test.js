import { _createTintGrid } from '../_createTintGrid';
import { TINT_GRID_SIZE } from '../../config';

describe('_createTintGrid', () => {
  test('returns TINT_GRID_SIZE^2 entries', () => {
    expect(_createTintGrid(0)).toHaveLength(TINT_GRID_SIZE * TINT_GRID_SIZE);
  });

  test('range=0 produces all zero tints', () => {
    const grid = _createTintGrid(0);
    for (const tint of grid) {
      expect(tint.Red === 0).toBe(true);
      expect(tint.Green === 0).toBe(true);
      expect(tint.Blue === 0).toBe(true);
    }
  });

  test('non-zero range produces non-zero values somewhere', () => {
    const grid = _createTintGrid(10);
    const nonZero = grid.some(
      (t) => t.Red !== 0 || t.Green !== 0 || t.Blue !== 0
    );
    expect(nonZero).toBe(true);
  });
});
