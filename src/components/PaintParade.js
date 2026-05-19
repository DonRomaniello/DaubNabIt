import React from 'react';
import { useSelector } from 'react-redux';
import { paradeIsOpened } from '../app/store/panelsSlice';
import { useCopyPaintToClipboard } from '../hooks/useCopyPaintToClipboard';
import 'react-toastify/dist/ReactToastify.min.css';
import { MATCHES_TO_DISPLAY, STAGGER_MS } from '../config';
import styles from './PaintParade.module.css';

export function PaintParade({ panel }) {
  const { matches, textBlack } = panel;
  const opened = useSelector(paradeIsOpened);
  const copyInfo = useCopyPaintToClipboard();

  if (!opened || !matches?.length) return null;

  return (
    <div className={styles.swatches}>
      {matches.slice(0, MATCHES_TO_DISPLAY).map((match, idx) => (
        <button
          type="button"
          key={match.paint.label + match.paint.hex + match.paint.name}
          className={`${styles.swatch} ${textBlack ? styles.blackText : ''}`}
          style={{
            background: match.paint.hex,
            animationDelay: `${idx * STAGGER_MS}ms`,
          }}
          onClick={() => copyInfo(match)}
          aria-label={`Copy ${match.paint.name} by ${match.paint.brand} to clipboard`}
        >
          {match.paint.name}
        </button>
      ))}
    </div>
  );
}
