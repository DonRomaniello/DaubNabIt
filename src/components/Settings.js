import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Refresh } from '../arrow-repeat.svg';

import {
        currentBrand,
        selectBrands,
        selectPaints,
        setBrand
        } from '../app/store/paintsSlice';

import { IconContext } from 'react-icons';

import {
        BsArrowRepeatModded,
        BsGearFill
        } from 'react-icons/bs';

import {
        selectTimer,
        resetTimer
         } from '../app/store/timerSlice';

import {
        paradeIsOpened,
        reGenerate,
        findMatches
        } from '../app/store/panelsSlice';

import { SelectMenu } from './SelectMenu';

import styles from './Settings.module.css';

const gearSize = '60px';

export function Settings() {

  const dispatch = useDispatch();

  const [settingsOpened, openSet] = useState(false);

  const paradeOpened = useSelector(paradeIsOpened);

  const { timer } = useSelector(selectTimer);

  const brands = useSelector(selectBrands);

  const brand = useSelector(currentBrand);

  const paints = useSelector(selectPaints);

  const reRoll = () => {
    dispatch(reGenerate())
    dispatch(findMatches({ paints, brand }))
    dispatch(resetTimer())
  }

  return (
    <div className={`${styles.settingsRow} + ' ' + ${paradeOpened && styles.settingsRowParadeOpened}`}>
    <IconContext.Provider value={{ className: styles.context }}>
      <BsGearFill
      // style={'stroke=black'}
      className={styles.gear}
      size={gearSize}
      onClick={() => openSet(!settingsOpened)}
      />
      </IconContext.Provider>
      {settingsOpened &&
        <SelectMenu
        value={'all'}
        contents={brands}
        name={'Brand of Paint'}
        setFunction={setBrand}
        / >
      }
      {(settingsOpened || paradeOpened) ?
      <Refresh
      className={styles.gear}

      onClick={() => reRoll()}
      /> : null}
      </div>
  )
}
