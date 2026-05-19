import { _isValidHex } from '../_isValidHex';

describe('_isValidHex', () => {
  test('accepts #ffffff', () => {
    expect(_isValidHex('#ffffff')).toBe('#ffffff');
  });

  test('accepts ffffff without hash', () => {
    expect(_isValidHex('ffffff')).toBe('#ffffff');
  });

  test('accepts uppercase, returns lowercased', () => {
    expect(_isValidHex('#ECF4FE')).toBe('#ecf4fe');
  });

  test('rejects short input', () => {
    expect(_isValidHex('#fff')).toBeNull();
  });

  test('rejects non-hex characters', () => {
    expect(_isValidHex('#xyzxyz')).toBeNull();
  });

  test('rejects non-string', () => {
    expect(_isValidHex(undefined)).toBeNull();
    expect(_isValidHex(null)).toBeNull();
    expect(_isValidHex(123)).toBeNull();
  });

  test('truncates extra trailing characters', () => {
    expect(_isValidHex('abcdef extra')).toBe('#abcdef');
  });
});
