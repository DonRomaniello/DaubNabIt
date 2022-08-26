import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectBrands } from '../app/store/paintsSlice';

import { IconContext } from 'react-icons';

import { BsGearFill } from 'react-icons/bs';

import styles from './Settings.module.css';


const gearSize = '5vw';

export function Settings() {

  const [settingsOpened, openSet] = useState(false);

  const [brandsOpened, openBrands] = useState(false);

  const brands = useSelector(selectBrands);

  useEffect(() => {
    if (!settingsOpened) {
      openBrands(false)
    }
  }, [settingsOpened])

  console.log(brands)

  return (
    <div className={styles.settingsRow}>
    <IconContext.Provider value={{ className: styles.context }}>
      <BsGearFill
      className={styles.gear}
      size={gearSize}
      onClick={() => openSet(!settingsOpened)}
      />
      </IconContext.Provider>
      {settingsOpened &&
        <div>
        <button
        name="brand"
        className={styles.selectMenu}
        onClick={() => openBrands(!brandsOpened)}
        >
          Brand of Paint
        </button>
        {brandsOpened &&
        brands.map((brand) => {
          return (
            <button
            key={brand}
            className={styles.selectMenu}>
              {brand}
            </button>
          )
        })
        }
       </div>

      }
      </div>
  )
}
