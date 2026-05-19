import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { BsGearFill } from 'react-icons/bs';
import { ReactComponent as Refresh } from '../arrow-repeat.svg';
import {
  currentBrand,
  selectBrands,
  selectPaints,
  setBrand,
} from '../app/store/paintsSlice';
import {
  paradeIsOpened,
  reGenerate,
  findMatches,
} from '../app/store/panelsSlice';
import { SelectMenu } from './SelectMenu';
import { Help } from './Help';
import { GEAR_SIZE, ALL_BRANDS_ID } from '../config';
import styles from './Settings.module.css';

export function Settings() {
  const dispatch = useDispatch();
  const [settingsOpened, openSet] = useState(false);
  const paradeOpened = useSelector(paradeIsOpened);
  const brands = useSelector(selectBrands);
  const brand = useSelector(currentBrand);
  const paints = useSelector(selectPaints);

  const reRoll = () => {
    dispatch(reGenerate());
    dispatch(findMatches({ paints, brand }));
  };

  return (
    <>
      <div
        className={`${styles.settingsRow} ${
          paradeOpened ? styles.settingsRowParadeOpened : ''
        }`}
      >
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => openSet((open) => !open)}
          aria-label="Settings"
          aria-expanded={settingsOpened}
        >
          <IconContext.Provider value={{ className: styles.context }}>
            <BsGearFill className={styles.gear} size={GEAR_SIZE} />
          </IconContext.Provider>
        </button>
        {settingsOpened && (
          <SelectMenu
            value={ALL_BRANDS_ID}
            contents={brands}
            name="Brand of Paint"
            setFunction={setBrand}
          />
        )}
        {(settingsOpened || paradeOpened) && (
          <button
            type="button"
            className={styles.iconButton}
            onClick={reRoll}
            aria-label="Reroll panels"
          >
            <Refresh className={styles.gear} />
          </button>
        )}
      </div>
      <div>{(settingsOpened || paradeOpened) && <Help />}</div>
    </>
  );
}
