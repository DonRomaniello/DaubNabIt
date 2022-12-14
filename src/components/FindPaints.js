import React, { useEffect, useState } from 'react';

import Countdown from 'react-countdown';

import { useSelector, useDispatch } from 'react-redux';

import { incrementTimer, resetTimer } from '../app/store/timerSlice';

import {
        currentBrand,
        loadPaints,
        setRGBData,
        selectPaints,
      } from '../app/store/paintsSlice';

import { setParadeOpen } from '../app/store/panelsSlice';

import { findMatches } from '../app/store/panelsSlice';

import styles from './FindPaints.module.css';

export function FindPaints() {

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const brand = useSelector(currentBrand);

  const msPerPaint = 200;

  const [timerRunning, setTimerRunning] = useState(false);

  const findPaints = () => {
    dispatch(findMatches({ paints, brand }))
    dispatch(setParadeOpen())
    setTimerRunning(true);
  }

  useEffect(() => {
    dispatch(loadPaints())
    dispatch(setRGBData())
  }, [dispatch])

  useEffect(() => {
    dispatch(resetTimer())
    dispatch(findMatches({ paints, brand }))
  }, [brand])


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
