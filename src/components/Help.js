import React from 'react';

import { IconContext } from 'react-icons';

import { useSelector } from 'react-redux';

import {
  paradeIsOpened
} from '../app/store/panelsSlice';

import {
      BsQuestionCircleFill
        } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import styles from './Help.module.css';

export function Help() {

const notify = (string) => toast("Pasted colors need to be in hexadecimal format (for now). See help for details.");

const gearSize = '55px';

  const paradeOpened = useSelector(paradeIsOpened);

  return (
    <>
    <ToastContainer
      position="top-center"
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
       />
    <div className={`${styles.help} + ' ' + ${paradeOpened && styles.helpParadeOpened}`}>
    <IconContext.Provider value={{ className: styles.context }}>
      <BsQuestionCircleFill
      className={styles.question}
      size={gearSize}
      onClick={() => notify()}
      />
      </IconContext.Provider>
      </div>
      </>
  )
}
