import reducer, {
  setParadeOpen,
  closeParade,
  reGenerate,
  replacePanel,
} from '../panelsSlice';
import { PANEL_COUNT } from '../../../config';

describe('panelsSlice', () => {
  test('initializes with PANEL_COUNT random panels', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state.colors).toHaveLength(PANEL_COUNT);
    expect(state.openedParade).toBe(false);
    for (const panel of state.colors) {
      expect(panel.color).toMatch(/^#[0-9a-f]{6}$/);
      expect(panel.rgb).toHaveProperty('Red');
      expect(typeof panel.textBlack).toBe('boolean');
    }
  });

  test('setParadeOpen flips opened to true', () => {
    const state = reducer(undefined, setParadeOpen());
    expect(state.openedParade).toBe(true);
  });

  test('closeParade flips opened to false', () => {
    const opened = reducer(undefined, setParadeOpen());
    const closed = reducer(opened, closeParade());
    expect(closed.openedParade).toBe(false);
  });

  test('reGenerate replaces colors and resets opened', () => {
    const opened = reducer(undefined, setParadeOpen());
    const next = reducer(opened, reGenerate());
    expect(next.openedParade).toBe(false);
    expect(next.colors).toHaveLength(PANEL_COUNT);
  });

  test('replacePanel swaps a single panel by index', () => {
    const initial = reducer(undefined, { type: '@@INIT' });
    const next = reducer(initial, replacePanel({ idx: 1, hex: '#abcdef' }));
    expect(next.colors[1].color).toBe('#abcdef');
    expect(next.colors[1].rgb).toEqual({ Red: 171, Green: 205, Blue: 239 });
    expect(next.colors[0]).toEqual(initial.colors[0]);
    expect(next.colors[2]).toEqual(initial.colors[2]);
  });
});
