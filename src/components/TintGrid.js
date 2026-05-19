import React, { useMemo } from 'react';
import { _createTintGrid } from '../modules/_createTintGrid';
import styles from './TintGrid.module.css';

const applyTint = (rgb, tint) =>
  `rgb(${tint.Red + rgb.Red}, ${tint.Green + rgb.Green}, ${tint.Blue + rgb.Blue})`;

export function TintGrid({ rgb, range = 0 }) {
  const grid = useMemo(() => _createTintGrid(range), [range]);

  return (
    <div className={styles.gridContainer}>
      {grid.map((tint, i) => (
        <div
          key={i}
          className={styles.gridCell}
          style={{ background: applyTint(rgb, tint) }}
        />
      ))}
    </div>
  );
}
