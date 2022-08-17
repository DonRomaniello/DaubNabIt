import React, { useState } from 'react';

import Countdown from 'react-countdown';

import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';

import { selectPaints } from '../app/store/paintsSlice';


import styles from './PaintParade.module.css'

export function PaintParade() {

  const dispatch = useDispatch();

  const msPerPaint = 100;

  const paints = useSelector(selectPaints);

  const [opened, isOpened] = useState(true);

  // const [timeNow, setTimeNow] = useState({});

  return (
    <div>
      <Countdown date={Date.now() + 10000}
       onTick={props => console.log(props)}
      //  renderer={() => {}}
       />
      {/* <CSSTransition
        in={opened}
        timeout={300}
        classNames="alert"
        unmountOnExit
        // onEnter={() => setShowButton(false)}
        // onExited={() => setShowButton(true)}
        > */}
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
        {/* {timeNow.seconds} */}
      </div>
      {/* </CSSTransition> */}
    </div>
  )

}
