const HEX_PAIR = /^[0-9a-f]{2}$/i;

export const _isValidHex = (raw) => {
  if (typeof raw !== 'string') return null;
  const stripped = raw.startsWith('#') ? raw.slice(1, 7) : raw.slice(0, 6);
  if (stripped.length !== 6) return null;
  const r = stripped.slice(0, 2);
  const g = stripped.slice(2, 4);
  const b = stripped.slice(4, 6);
  if (!HEX_PAIR.test(r) || !HEX_PAIR.test(g) || !HEX_PAIR.test(b)) return null;
  return '#' + stripped.toLowerCase();
};
