import React from 'react';
import { useSelector } from 'react-redux';
import { selectTimer } from '../app/store/timerSlice';
import { useCopyPaintToClipboard } from '../hooks/useCopyPaintToClipboard';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './PaintParade.module.css';

const MAX_MATCHES = 5;

export function PaintParade({ panel }) {
  const { matches, textBlack, timerOffset } = panel;
  const { timer } = useSelector(selectTimer);
  const copyInfo = useCopyPaintToClipboard();

  if (timer <= 0) return null;

  return (
    <div className={styles.swatches}>
      {matches?.slice(0, MAX_MATCHES).map((match, idx) => {
        if (idx >= timer - timerOffset) return null;
        return (
          <div
            key={match.paint.label + match.paint.hex + match.paint.name}
            className={`${styles.swatch} ${textBlack ? styles.blackText : ''}`}
            style={{ background: match.paint.hex }}
            onClick={() => copyInfo(match)}
          >
            {match.paint.name}
          </div>
        );
      })}
    </div>
  );
}
