import React from 'react';

import { IconContext } from 'react-icons';

import { useSelector } from 'react-redux';

import {
  paradeIsOpened
} from '../app/store/panelsSlice';

import {
      BsQuestionCircleFill
        } from 'react-icons/bs';


import styles from './Help.module.css';

export function Help() {

const gearSize = '55px';

  const paradeOpened = useSelector(paradeIsOpened);

  return (
    <>
    <div className={`${styles.help} + ' ' + ${paradeOpened && styles.helpParadeOpened}`}>
    <IconContext.Provider value={{ className: styles.context }}>
      <BsQuestionCircleFill
      className={styles.question}
      size={gearSize}
      />
      </IconContext.Provider>
      </div>
      </>
  )
}
