import React from 'react';

import styles from './SelectMenu.module.css';

export function SelectMenu(props) {

  const {contents, name} = props;

  return (
        <div
        // className={styles.selectMenu}
        >
        <select className={styles.selectMenu}>
          <option value="">{name}</option>
          {contents.map((content) => {
            return (
              <option
               key={content}
               value={content.toLowerCase()}>
                {content}
              </option>
            )
          })}
        </select>
       </div>
  )
}
