import React, { useEffect, useState } from 'react';

import { useDispatch, dispatch } from 'react-redux';

import {  reGenerate,
          findMatches
         } from '../app/store/panelsSlice';

import { _makeHex } from '../modules/_makeHex';

import { _createTintGrid } from '../modules/_createTintGrid';

import { PaintParade } from './PaintParade';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { color, rgb, matches } = props.panel

  const dispatch = useDispatch();

  const [range, setRange] = useState(0);

  const [grid, setGrid] = useState(_createTintGrid(range))

  const [displayedHex, setDisplayedHex] = useState(color)

  const applyTint = (tint) => {
    let rgbTinted = `rgb(${tint.Red + rgb.Red}, ${tint.Green + rgb.Green}, ${tint.Blue + rgb.Blue})`
      return rgbTinted
  }

  useEffect(() => {
    setGrid(_createTintGrid(range))
    dispatch(findMatches())
  }, [range])

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
      Matches: {matches.length}
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
      <PaintParade color={color}/>
    </div>
  )
}
