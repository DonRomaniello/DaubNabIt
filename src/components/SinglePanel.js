import React, { useState } from 'react';

import styles from './SinglePanel.module.css';

export function SinglePanel(props) {

  const { color } = props

  return (
    <div className={styles.colorBar}
      style={{
        backgroundColor: color,
      }} />
    // </div>
  );
}
