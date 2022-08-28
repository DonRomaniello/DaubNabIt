import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectBrands,
          setBrand } from '../app/store/paintsSlice';

import { IconContext } from 'react-icons';

import { BsArrowRepeat, BsGearFill } from 'react-icons/bs';

import { selectTimer, resetTimer } from '../app/store/timerSlice';

import { paradeIsOpened, reGenerate } from '../app/store/panelsSlice';

import { SelectMenu } from './SelectMenu';

import styles from './Settings.module.css';

const gearSize = '60px';

export function Settings() {

  const dispatch = useDispatch();

  const [settingsOpened, openSet] = useState(false);

  const paradeOpened = useSelector(paradeIsOpened)

  const { timer } = useSelector(selectTimer);

  const brands = useSelector(selectBrands);

  const reRoll = () => {
    dispatch(reGenerate())
    dispatch(resetTimer())
  }

  return (
    <div className={`${styles.settingsRow} + ' ' + ${styles.settingsRowParadeOpened}`}>
    <IconContext.Provider value={{ className: styles.context }}>
      <BsGearFill
      className={styles.gear}
      size={gearSize}
      onClick={() => openSet(!settingsOpened)}
      />
      {timer ?
      <BsArrowRepeat
      className={styles.gear}
      size={gearSize}
      onClick={() => reRoll()}
      /> : null}
      </IconContext.Provider>
      {settingsOpened &&
        <SelectMenu
        value={'all'}
        contents={brands}
        name={'Brand of Paint'}
        setFunction={setBrand}
        / >
      }
      </div>
  )
}
