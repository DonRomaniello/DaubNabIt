import React from 'react';
import { TintGrid } from './TintGrid';
import styles from './ColorBar.module.css';

export function ColorBar({ color, rgb, range, onClick }) {
  return (
    <div
      className={styles.colorBar}
      style={{ background: color }}
      onClick={onClick}
    >
      <TintGrid rgb={rgb} range={range} />
    </div>
  );
}
