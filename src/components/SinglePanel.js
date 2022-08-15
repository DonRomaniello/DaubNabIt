import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { reGenerate } from '../app/store/panelsSlice';

import { makeRGBObject } from '../modules/makeRGBObject';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { color } = props

  const dispatch = useDispatch();

  const [rgb, setRgb] = useState(makeRGBObject(color))

  return (
    <div>
      <div className={styles.colorBar}
        style={{
          backgroundColor: color,
        }}
        onClick={() => dispatch(reGenerate())}
        / >
      <div className={styles.underHex}>
      Hex: {color.toUpperCase()}
      </div>
      <div className={styles.rgbHolder}>
      {Object.keys(rgb).map((channel) => {
        return (
        <div key={channel} className={styles.rgbElement}>
          {channel} : {rgb[channel]}
        </div>
        )
      })}
      </div>
    </div>
  )
}
