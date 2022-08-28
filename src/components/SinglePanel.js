import React, { useEffect, useState } from 'react';

import { useDispatch, dispatch } from 'react-redux';

import {  reGenerate,
          findMatches,
          replacePanel
         } from '../app/store/panelsSlice';

import { _createTintGrid } from '../modules/_createTintGrid';

import { PaintParade } from './PaintParade';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { color, rgb, matches, textBlack } = props.panel

  const { idx } = props

  const dispatch = useDispatch();

  const [range, setRange] = useState(0);

  const [grid, setGrid] = useState(_createTintGrid(range))

  const applyTint = (tint) => {
    let rgbTinted = `rgb(${tint.Red + rgb.Red}, ${tint.Green + rgb.Green}, ${tint.Blue + rgb.Blue})`
      return rgbTinted
  }

  useEffect(() => {
    setGrid(_createTintGrid(range))
  }, [range])

  const changeColor = () => {
    let replacer = '#7E737D'
    console.log(idx)
    dispatch(replacePanel({idx, hex: replacer}))
  }

  return (
    <div>
      <div className={styles.colorBar}
        style={{
          background: color,
        }}
        onClick={() => changeColor()}
        >
          <div className={styles.gridContainer} >
            {grid.map((tint) => {
              return (<div
                className={styles.gridCell}
                style={{
                  background: applyTint(tint),
                }}
                />)
            })}
          </div>
        </div>
      <PaintParade
      color={color}
      matches={matches}
      textBlack={textBlack}
      />
    </div>
  )
}
