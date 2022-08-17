import React from 'react';

import { useSelector } from 'react-redux';

import { selectPaints } from '../app/store/paintsSlice';

import styles from './PaintParade.module.css'

export function PaintParade() {

  const paints = useSelector(selectPaints);

  return (
    <div>
      {paints.map((paint) => {
        return (
          <div
          className={styles.swatch}
          style={{
            background: paint.hex,
          }}>
            {paint.name}
          </div>
        )



      })}
    </div>
  )




}
