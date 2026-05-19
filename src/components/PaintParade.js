import React from 'react';
import { useSelector } from 'react-redux';
import { paradeIsOpened } from '../app/store/panelsSlice';
import { useCopyPaintToClipboard } from '../hooks/useCopyPaintToClipboard';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './PaintParade.module.css';

const MAX_MATCHES = 5;
const STAGGER_MS = 200;

export function PaintParade({ panel }) {
  const { matches, textBlack } = panel;
  const opened = useSelector(paradeIsOpened);
  const copyInfo = useCopyPaintToClipboard();

  if (!opened || !matches?.length) return null;

  return (
    <div className={styles.swatches}>
      {matches.slice(0, MAX_MATCHES).map((match, idx) => (
        <div
          key={match.paint.label + match.paint.hex + match.paint.name}
          className={`${styles.swatch} ${textBlack ? styles.blackText : ''}`}
          style={{
            background: match.paint.hex,
            animationDelay: `${idx * STAGGER_MS}ms`,
          }}
          onClick={() => copyInfo(match)}
        >
          {match.paint.name}
        </div>
      ))}
    </div>
  );
}
