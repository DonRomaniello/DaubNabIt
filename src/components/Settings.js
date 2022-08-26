import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectBrands } from '../app/store/paintsSlice';

import { IconContext } from 'react-icons';

import { BsArrowRepeat, BsGearFill } from 'react-icons/bs';

import { selectTimer } from '../app/store/timerSlice';

import { SelectMenu } from './SelectMenu';

import styles from './Settings.module.css';

const gearSize = '5vw';

export function Settings() {

  const [settingsOpened, openSet] = useState(false);

  const [brandsOpened, openBrands] = useState(false);

  const { timer } = useSelector(selectTimer);

  const brands = useSelector(selectBrands);

  useEffect(() => {
    if (!settingsOpened) {
      openBrands(false)
    }
  }, [settingsOpened])

  console.log(timer)

  return (
    <div className={styles.settingsRow}>
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
      /> : null}
      </IconContext.Provider>
      {settingsOpened &&
        <SelectMenu
        opened={brandsOpened}
        openedFunction={openBrands}
        contents={brands}
        name={'Brand of Paint'}
        / >
      }
      </div>
  )
}
