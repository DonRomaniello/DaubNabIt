import React, { useEffect, useState } from 'react';

import Countdown,
        {CountdownApi}
         from 'react-countdown';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer,
         incrementTimer,
         resetTimer,
         } from '../app/store/timerSlice';

import {loadPaints,
        setRGBData,
        sortPaints,
        selectPaints } from '../app/store/paintsSlice';


import {  } from '../app/store/paintsSlice';



import styles from './FindPaints.module.css';

export function FindPaints() {

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const time = useSelector(selectTimer);

  const msPerPaint = 200;

  const [timerRunning, setTimerRunning] = useState(false);

  const paintDeploy = () => {
    dispatch(loadPaints()) // This reduces blocking time 18x
    dispatch(setRGBData())
    dispatch(sortPaints())
    setTimerRunning(true)
  }

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
        onClick={() => paintDeploy()}
        >
          Find Paints
          </button>
      </div>
    </div>
  )
}
