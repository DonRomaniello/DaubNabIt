import React from 'react';
import { TintGrid } from './TintGrid';
import styles from './ColorBar.module.css';

export function ColorBar({ color, rgb, range, onClick }) {
  return (
    <button
      type="button"
      className={styles.colorBar}
      style={{ background: color }}
      onClick={onClick}
      aria-label={`Color swatch ${color}. Click to paste a hex color from the clipboard.`}
    >
      <TintGrid rgb={rgb} range={range} />
    </button>
  );
}
