import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';

import { BsGearFill } from 'react-icons/bs';

import styles from './Settings.module.css';

const gearSize = '5vw';

export function Settings() {

  const [settingsOpened, openSet] = useState(false);

  return (
    <IconContext.Provider value={{ className: styles.context }}>
      <BsGearFill
      className={styles.gear}
      size={gearSize}
      onClick={() => setInterval(openSet(!settingsOpened), 10)}
      />
      {settingsOpened &&
      <div>
        Opened.
      </div>

      }
    </IconContext.Provider>
  )
}
