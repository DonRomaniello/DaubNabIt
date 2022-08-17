import React, { useEffect, useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import { dispatch, useSelector, useDispatch } from 'react-redux';

import { selectPaints } from '../app/store/paintsSlice';

import { selectTimer } from '../app/store/timerSlice';

import {
  resetTimer,
  incrementTimer,
} from '../app/store/timerSlice'

import styles from './PaintParade.module.css'

export function PaintParade() {

  const dispatch = useDispatch();

  const msPerPaint = 1000;

  const paints = useSelector(selectPaints);

  const { timer, lastTime }  = useSelector(selectTimer)

  const [opened, isOpened] = useState(true);

  useEffect(() => {
    dispatch(resetTimer())
  }, [])


  // useEffect(() => {
  //   const callIncrement = () => {
  //     dispatch(incrementTimer())
  //   }
  //   setInterval(callIncrement, msPerPaint)
  // }, [timer, dispatch])




  return (
    <div>

      <CSSTransition
        in={opened}
        timeout={300}
        classNames="alert"
        unmountOnExit
        // onEnter={() => setShowButton(false)}
        // onExited={() => setShowButton(true)}
        >
      {/* {paints.map((paint) => {
        return (
          <div
          className={styles.swatch}
          style={{
            background: paint.hex,
          }}>
            {paint.name}
          </div>
        )
      })} */}
      <div>
      {lastTime}, {timer}
      </div>
      </CSSTransition>
    </div>
  )

}
