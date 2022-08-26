import React from 'react';

import styles from './Settings.module.css';

export function SelectMenu(props) {

  const {opened, openedFunction, contents, name} = props;

  return (
        <div>
        <button
        className={styles.selectMenu}
        onClick={() => openedFunction(!opened)}
        >
          {name}
        </button>
        {opened &&
        contents.map((content) => {
          return (
            <button
            key={content}
            className={styles.selectMenu}>
              {content}
            </button>
          )
        })
        }
       </div>
  )
}
