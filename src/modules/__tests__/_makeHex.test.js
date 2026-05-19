import { _makeHex } from '../_makeHex';

describe('_makeHex', () => {
  test('clamps values above 255 to 255', () => {
    expect(_makeHex({ Red: 300, Green: 0, Blue: 0 })).toContain('ff');
  });

  test('clamps values below 0 to 0', () => {
    expect(_makeHex({ Red: -10, Green: -10, Blue: -10 })).toBe('#000');
  });
});
