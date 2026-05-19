const MATCH_COUNT = 20;
const CACHE_LIMIT = 30;

const closeness = (target, paint) =>
  Math.abs(target.Red - paint.rgb.Red) +
  Math.abs(target.Green - paint.rgb.Green) +
  Math.abs(target.Blue - paint.rgb.Blue);

const cache = new Map();

const isAllBrands = (brand) => {
  const b = brand?.toLowerCase();
  return b === 'all' || b === 'all brands';
};

export const _searchPaints = (color, payload) => {
  const { paints, brand } = payload;
  const key = `${color.Red},${color.Green},${color.Blue}|${brand}`;

  if (cache.has(key)) {
    const cached = cache.get(key);
    cache.delete(key);
    cache.set(key, cached);
    return cached;
  }

  const pool = isAllBrands(brand)
    ? paints
    : paints.filter((paint) => paint.brand === brand);

  const matches = new Array(pool.length);
  for (let i = 0; i < pool.length; i++) {
    matches[i] = { paint: pool[i], closeness: closeness(color, pool[i]) };
  }
  matches.sort((a, b) => a.closeness - b.closeness);
  const result = matches.slice(0, MATCH_COUNT);

  cache.set(key, result);
  if (cache.size > CACHE_LIMIT) {
    cache.delete(cache.keys().next().value);
  }
  return result;
};

export const _clearSearchCache = () => cache.clear();
