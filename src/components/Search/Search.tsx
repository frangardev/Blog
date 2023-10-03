import React from 'react'
import { Icon } from '@iconify/react';
import * as styles from './Search.module.css'

function Search() {
  return (
    <div className={styles.Search} >
        <Icon icon="pixelarticons:search" />
    </div>
  )
}

export default Search