import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentBrand,
  loadPaints,
  setRGBData,
  selectPaints,
} from '../app/store/paintsSlice';
import {
  findMatches,
  setParadeOpen,
  closeParade,
  paradeIsOpened,
} from '../app/store/panelsSlice';
import styles from './FindPaints.module.css';

export function FindPaints() {
  const dispatch = useDispatch();
  const paints = useSelector(selectPaints);
  const brand = useSelector(currentBrand);
  const opened = useSelector(paradeIsOpened);

  useEffect(() => {
    dispatch(loadPaints());
    dispatch(setRGBData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(closeParade());
    if (paints.length > 0) {
      dispatch(findMatches({ paints, brand }));
    }
  }, [brand, dispatch, paints]);

  const findPaints = () => {
    dispatch(findMatches({ paints, brand }));
    dispatch(setParadeOpen());
  };

  return (
    <div className={styles.findPaintsBody}>
      <button
        className={`${styles.findButton} ${opened ? styles.findButtonClosed : ''}`}
        onClick={findPaints}
      >
        Find Paints
      </button>
    </div>
  );
}
