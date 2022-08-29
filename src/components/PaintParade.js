import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectTimer } from '../app/store/timerSlice';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import styles from './PaintParade.module.css'

export function PaintParade(props) {

  const { panel } = props

  const { matches, textBlack, timerOffset } = panel;

  const { timer } = useSelector(selectTimer);

  const notify = (string) => toast("Paint information copied to clipboard!");

  const copyInfo = (match) => {
    const stringToCopy = match.paint.hex + ' "' + match.paint.name + '" ' + match.paint.brand
    navigator.clipboard.writeText(stringToCopy);
    notify()
  }

  return (
    <div>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
       />
      {(timer > 0) &&
      <div
      className={styles.swatches}
      >
      {matches?.slice(0,5).map((match, idx) => {
        if (idx < (timer - timerOffset)) {
        return (
          <div
          key={match.paint.label + match.paint.hex + match.paint.name}
          className={`${styles.swatch} ${textBlack && styles.blackText}`}
          style={{
            background: match.paint.hex,
          }}
          onClick={() => copyInfo(match)}
          >
            {match.paint.name}
          </div>
        )
        }
      })}
      </div>
    }
    </div>
  )

}
