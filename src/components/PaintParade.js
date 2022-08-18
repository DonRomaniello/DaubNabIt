import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer } from '../app/store/timerSlice';

import { selectPaints } from '../app/store/paintsSlice';

import styles from './PaintParade.module.css'

export function PaintParade() {

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const { timer } = useSelector(selectTimer);

  const [opened, isOpened] = useState(true);

  return (
    <div>
      {/* <CSSTransition
        in={opened}
        timeout={300}
        classNames="alert"
        unmountOnExit
        // onEnter={() => setShowButton(false)}
        // onExited={() => setShowButton(true)}
        > */}
      {paints.length > timer - 5 && paints.slice(timer, (timer + 5)).map((paint) => {
        return (
          <div
          key={paint.label}
          className={styles.swatch}
          style={{
            background: paint.hex,
          }}>
            {paint.name}
          </div>
        )
      })}
      <div>
        {timer}
      </div>
      {/* </CSSTransition> */}
    </div>
  )

}
