import React from 'react';

import styles from './SelectMenu.module.css';

import { useDispatch } from 'react-redux';

export function SelectMenu(props) {

  const {contents, name, value, setFunction} = props;

  const dispatch = useDispatch();

  return (
        <div>
        <select
        id={name.split(' ').join('').toLowerCase()}
        className={styles.selectMenu}
        onChange={(event) => dispatch(setFunction(event.target.value))}
        >
          <option value={value}>{name}</option>
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
