import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { reGenerate } from '../app/store/panelsSlice';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { color, rgb, matches } = props.panel

  const [range, setRange] = useState(50);

  const dispatch = useDispatch();

  let sevenBySeven = []

  for (let i = 0; i < 49; i++){
    sevenBySeven.push(i)
  }

  console.log(sevenBySeven)

  return (
    <div>
      <div className={styles.colorBar}
        style={{
          background: color,
        }}
        onClick={() => dispatch(reGenerate())}
        >
          <div className={styles.gridTest} >
            {sevenBySeven.map((number) => {
              return (<div></div>)
            })}
          </div>
        </div>
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
