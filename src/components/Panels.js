import React, { useState, useEffect } from 'react';

import { useMedia } from "tiny-use-media-esm";

import { useSelector } from 'react-redux';

import { ToastContainer, toast, Slide } from 'react-toastify';

import { selectPanels } from '../app/store/panelsSlice';

import { SinglePanel } from './SinglePanel';

import styles from './Panels.module.css';

export function Panels() {

  const panels = useSelector(selectPanels)

  const [visiblePanels, setVisiblePanels] = useState();

  /* These names mean that the LENGTH of the object key
  can be used as the amount of columns. */
  const { current } = useMedia({
    a: 0,
    bb: 600,
    ccc: 800,
  });

  return (
    <div>
      <ToastContainer
      position="top-center"
      hideProgressBar
      newestOnTop={false}
      transition={Slide}
      closeonClick
      rtl={false}
      limit={1}
       />
    <div className={styles.row}>
      {panels.slice(0, current.length).map((panel, idx) => {
        return <SinglePanel key={panel.color + idx} panel={panel} idx={idx}/>
      })}
    </div>
    </div>
  );
}
