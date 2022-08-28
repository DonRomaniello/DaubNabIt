import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer } from '../app/store/timerSlice';

import styles from './PaintParade.module.css'

export function PaintParade(props) {

  const { color, matches, textBlack } = props;

  const { timer } = useSelector(selectTimer);

  const copyInfo = (match) => {
    const stringToCopy = '"' + match.paint.name + '" ' + match.paint.brand
    navigator.clipboard.writeText(stringToCopy);
  }

  return (
    <div>
      {(timer > 0) &&
      <div
      // className={styles.swatches}
      className={styles.swatches}
      >
      {matches?.slice(0,5).map((match, idx) => {
        if (idx < timer) {
        return (
          <div
          key={match.paint.label + match.paint.hex + match.paint.name}
          // className={styles.swatch}
          className={`${styles.swatch} ${textBlack && styles.blackText}`}
          style={{
            background: match.paint.hex,
          }}
          onClick={() => copyInfo(match)}
          >
            {match.paint.name}
            {/* : {_getBrightness(match.paint.hex)} */}
          </div>
        )
        }
      })}
      </div>
    }
    </div>
  )

}
