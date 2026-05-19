import React from 'react';
import { useMedia } from 'tiny-use-media-esm';
import { useSelector } from 'react-redux';
import { ToastContainer, Slide } from 'react-toastify';
import { selectPanels } from '../app/store/panelsSlice';
import { SinglePanel } from './SinglePanel';
import styles from './Panels.module.css';

export function Panels() {
  const panels = useSelector(selectPanels);

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
        closeOnClick
        rtl={false}
        limit={1}
      />
      <div className={styles.row}>
        {panels.slice(0, current.length).map((panel, idx) => (
          <SinglePanel key={panel.color + idx} panel={panel} idx={idx} />
        ))}
      </div>
    </div>
  );
}
