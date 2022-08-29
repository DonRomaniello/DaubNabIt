import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
          reGenerate,
          findMatches,
          replacePanel
         } from '../app/store/panelsSlice';

import {
        currentBrand,
        selectPaints
      } from '../app/store/paintsSlice';

import { selectTimer } from '../app/store/timerSlice';

import { _createTintGrid } from '../modules/_createTintGrid';

import { PaintParade } from './PaintParade';

import { ToastContainer, toast, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { panel, idx } = props

  const { color, rgb, matches, textBlack } = panel

  const { timer } = useSelector(selectTimer);

  const paints = useSelector(selectPaints);

  const brand  = useSelector(currentBrand);

  const dispatch = useDispatch();

  const [range, setRange] = useState(0);

  const [grid, setGrid] = useState(_createTintGrid(range))

  const notify = (string) => toast("Pasted colors need to be in hexadecimal format (for now). See help for details.");

  const applyTint = (tint) => {
    let rgbTinted = `rgb(${tint.Red + rgb.Red}, ${tint.Green + rgb.Green}, ${tint.Blue + rgb.Blue})`
      return rgbTinted
  }

  useEffect(() => {
    setGrid(_createTintGrid(range))
  }, [range])

  const changeColor = () => {
    const isHex = (hex) => {
      const first = parseInt(hex,16);
      return (first.toString(16) === hex)
      }
    navigator.clipboard.readText().then(
      (clipboardColor) => {
        let cleanedHex = clipboardColor.slice(0, 7)
        let a = isHex(cleanedHex.slice(1,3).toLowerCase())
        let b = isHex(cleanedHex.slice(3,5).toLowerCase())
        let c = isHex(cleanedHex.slice(5,7).toLowerCase())
        if (a && b && c) {
          dispatch(replacePanel({idx, hex: clipboardColor, timerOffset: timer}))
          dispatch(findMatches({ paints, brand }))
        } else {
          notify()
        }
      })
  }

  return (
    <div>
      <ToastContainer
      position="top-center"
      // autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      transition={Slide}
      closeonClick
      rtl={false}
      limit={1}
       />
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
        panel={panel}
      />
    </div>
  )
}
