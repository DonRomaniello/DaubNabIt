import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { reGenerate } from '../app/store/panelsSlice';

import { _makeHex } from '../modules/_makeHex';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { color, rgb, matches } = props.panel

  const [range, setRange] = useState(10);

  const [displayedHex, setDisplayedHex] = useState(color)

  const dispatch = useDispatch();

  let grid = []

  for (let i = -3; i < 4; i++){
    let xTint = {
      Red : (Math.abs(i) === 3) ? range * Math.sign(i) : 0,
      Green:  (Math.abs(i) === 2) ? range * Math.sign(i) : 0,
      Blue:  (Math.abs(i) === 1) ? range * Math.sign(i) : 0,
    }
    for (let j = -3; j < 4; j++){
      let yTint = {
        Red : (Math.abs(j) === 3) ? range * Math.sign(j) : 0,
        Green:  (Math.abs(j) === 2) ? range * Math.sign(j) : 0,
        Blue:  (Math.abs(j) === 1) ? range * Math.sign(j) : 0,
      }
      let tint = {
        Red : xTint.Red + yTint.Red,
        Green : xTint.Green + yTint.Green,
        Blue: xTint.Blue + yTint.Blue,
      }
      grid.push(tint)
    }
  }

  const applyTint = (tint) => {
    let rgbTinted = `rgb(${tint.Red + rgb.Red}, ${tint.Green + rgb.Green}, ${tint.Blue + rgb.Blue})`
      return rgbTinted
  }


  return (
    <div>
      <div className={styles.colorBar}
        style={{
          background: color,
        }}
        >
          <div className={styles.gridContainer} >
            {grid.map((tint) => {
              return (<div
                className={styles.gridCell}
                style={{
                  background: applyTint(tint),
                }}
                onMouseEnter={() => setDisplayedHex(_makeHex(
                  {Red: tint.Red + rgb.Red,
                  Green: tint.Green + rgb.Green,
                  Blue: tint.Blue + rgb.Blue}))}
                />)
            })}
          </div>
        </div>
      <div className={styles.underHex}>
      Hex: {displayedHex.toUpperCase()}
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
