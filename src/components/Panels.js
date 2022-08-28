import React, { useState, useEffect } from 'react';

import { useSelector, dispatch, useDispatch } from 'react-redux';

import { selectPanels } from '../app/store/panelsSlice';

import { SinglePanel } from './SinglePanel';

import styles from './Panels.module.css';

export function Panels() {

  const panels = useSelector(selectPanels)

  return (
    <div className={styles.row}>
      {panels.map((panel, idx) => {
        return <SinglePanel key={panel.color + idx} panel={panel} idx={idx}/>
      })}
    </div>
  );
}
