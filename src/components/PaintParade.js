import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer } from '../app/store/timerSlice';

import { selectPaints } from '../app/store/paintsSlice';

import styles from './PaintParade.module.css'

export function PaintParade(props) {

  const { color, matches } = props;

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const { timer } = useSelector(selectTimer);

  const [opened, isOpened] = useState(true);

  return (
    <div>
      <div className={styles.swatches}>
      {matches.slice(0,5).map((match, idx) => {
        if (idx < timer) {
        return (
          <div
          key={match.paint.label + match.paint.hex + match.paint.name}
          className={styles.swatch}
          style={{
            background: match.paint.hex,
          }}>
            {match.paint.name}: {match.closeness}
          </div>
        )
        }
      })}
      {/* </CSSTransition> */}
      </div>
    </div>
  )

}
