import React from 'react'
import * as styles from './Navbar.module.css';
import { Link } from "gatsby"

import Logo from '../../assets/Logo/Logo'

function Navbar() {
  return (
    <ul className={styles.Navbar}>
        <li className={styles.Navbar_li}><Link to='/' itemProp="url"><Logo/></Link></li>
    </ul>
  )
}

export default Navbar