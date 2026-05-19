import { TINT_GRID_SIZE } from '../config';

const channelFor = (i, magnitude, range) => {
  const abs = Math.abs(i);
  const sign = Math.sign(i);
  return {
    Red: abs === magnitude ? range * sign : 0,
    Green: abs === magnitude - 1 ? range * sign : 0,
    Blue: abs === magnitude - 2 ? range * sign : 0,
  };
};

export const _createTintGrid = (range) => {
  const half = Math.floor(TINT_GRID_SIZE / 2);
  const grid = [];
  for (let i = -half; i <= half; i++) {
    const x = channelFor(i, half, range);
    for (let j = -half; j <= half; j++) {
      const y = channelFor(j, half, range);
      grid.push({
        Red: x.Red + y.Red,
        Green: x.Green + y.Green,
        Blue: x.Blue + y.Blue,
      });
    }
  }
  return grid;
};
