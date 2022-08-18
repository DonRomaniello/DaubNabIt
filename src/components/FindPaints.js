import React, { useEffect } from 'react';

import Countdown from 'react-countdown';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer,
         incrementTimer,
         resetTimer,
         } from '../app/store/timerSlice';

import { selectPaints } from '../app/store/paintsSlice';

import { selectSwatchMatches } from '../app/store/paintsSlice';

import styles from './FindPaints.module.css';

export function FindPaints() {

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const time = useSelector(selectTimer);

  const msPerPaint = 1000;

  const swatchMatches = useSelector(selectSwatchMatches)

  return (
    <div>
      <Countdown
        date={1} // This is required...
        overtime={true}
        intervalDelay={msPerPaint}
        onTick={() => dispatch(incrementTimer())}
        renderer={() => {}}
       />
      <div className={styles.findPaintsBody}>
        <button className={styles.findButton}>Find Paints</button>
      </div>
    </div>
  )
}
