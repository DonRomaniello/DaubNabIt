import React, { useEffect, useState } from 'react';

import Countdown from 'react-countdown';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer,
         incrementTimer,
         } from '../app/store/timerSlice';

import {
        setRGBData,
        selectPaints } from '../app/store/paintsSlice';

import styles from './FindPaints.module.css';
import { findMatches } from '../app/store/panelsSlice';

export function FindPaints() {

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const msPerPaint = 200;

  const [timerRunning, setTimerRunning] = useState(false);

  const findPaints = () => {
    console.log(paints.length)
    dispatch(findMatches('hee'))
    setTimerRunning(true);
  }

  useEffect(() => {
    // dispatch(loadPaints()) // This reduces blocking time 18x
    dispatch(setRGBData())
  }, [dispatch])

  return (
    <div>
      {timerRunning &&
      <Countdown
        date={1} // This is required...
        overtime={true}
        intervalDelay={msPerPaint}
        onTick={() => dispatch(incrementTimer())}
        renderer={() => {}}
       />}
      <div className={styles.findPaintsBody}>
        <button
        className={`${styles.findButton} ${timerRunning && styles.findButtonClosed}`}
        onClick={() => findPaints()}
        >
          Find Paints
          </button>
      </div>
    </div>
  )
}
