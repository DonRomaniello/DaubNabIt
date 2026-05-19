import { _setRGBData } from '../_setRGBData';

describe('_setRGBData', () => {
  test('parses white', () => {
    expect(_setRGBData('#ffffff')).toEqual({ Red: 255, Green: 255, Blue: 255 });
  });

  test('parses black', () => {
    expect(_setRGBData('#000000')).toEqual({ Red: 0, Green: 0, Blue: 0 });
  });

  test('parses a known hex', () => {
    expect(_setRGBData('#ECF4FE')).toEqual({ Red: 236, Green: 244, Blue: 254 });
  });

  test('handles lowercase', () => {
    expect(_setRGBData('#abcdef')).toEqual({ Red: 171, Green: 205, Blue: 239 });
  });
});
