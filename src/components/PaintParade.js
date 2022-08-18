import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer } from '../app/store/timerSlice';

import { selectPaints } from '../app/store/paintsSlice';

import styles from './PaintParade.module.css'

export function PaintParade(props) {

  const { color } = props;

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
      {paints.length > timer - 5 && paints.slice(timer, (timer + 5)).map((paint, idx) => {
        // if (idx == 0){
        //   let paintHex = paint.hex.toUpperCase()
        //   let panelHex = color.toUpperCase()
        //   if (paintHex == panelHex) {
        //     dispatch(addMatch({ color, paint}))
        //   }
        // }
        return (
          <div
          key={paint.label + paint.hex + paint.name}
          // key={paint.name}
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
