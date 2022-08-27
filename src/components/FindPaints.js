import React, { useEffect, useState } from 'react';

import Countdown from 'react-countdown';

import { useSelector, useDispatch } from 'react-redux';

import { incrementTimer } from '../app/store/timerSlice';

import {
        loadPaints,
        setRGBData,
        selectPaints,
        brandSelected,
      } from '../app/store/paintsSlice';

import { findMatches } from '../app/store/panelsSlice';

import styles from './FindPaints.module.css';

export function FindPaints() {

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const brand = useSelector(brandSelected);

  const msPerPaint = 200;

  const [timerRunning, setTimerRunning] = useState(false);

  const findPaints = () => {
    // dispatch(loadPaints())
    // dispatch(setRGBData())
    dispatch(findMatches({ paints, brand }))
    setTimerRunning(true);
  }

  useEffect(() => {
    dispatch(loadPaints())
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
