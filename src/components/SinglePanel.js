import React, { useState } from 'react';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { color } = props

  const makeRGBObject = (hex) => {
    const rHex = hex.slice(1,3)
    const gHex = hex.slice(3,5)
    const bHex = hex.slice(5)

    const Red = parseInt(rHex, 16)
    const Green = parseInt(gHex, 16)
    const Blue = parseInt(bHex, 16)

    return { Red, Green, Blue }
  }

  const [rgb, setRgb] = useState(makeRGBObject(color))

  return (
    <div>
      <div className={styles.colorBar}
        style={{
          backgroundColor: color,
        }} / >
      <div className={styles.underHex}>
      {color.toUpperCase()}
      </div>
      <div className={styles.rgbHolder}>
      {Object.keys(rgb).map((test) => {
        return (
        <div className={styles.rgbElement}>
          {test} : {rgb[test]}
        </div>
        )
      })}
      </div>
    </div>
  )
}
