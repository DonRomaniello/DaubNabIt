import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectPaints } from '../app/store/paintsSlice';

import { selectSwatchMatches } from '../app/store/paintsSlice';

import styles from './FindPaints.module.css';
export function FindPaints() {

  const dispatch = useDispatch();

  const paints = useSelector(selectPaints);

  const swatchMatches = useSelector(selectSwatchMatches)

  return (
    <div className={styles.findPaintsBody}>
      <button className={styles.findButton}>Find Paints</button>
    </div>
  )
}
