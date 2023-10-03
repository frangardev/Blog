import React from 'react'
import * as styles from './Navbar.module.css';
import { Link } from "gatsby"

import Logo from '../../assets/Logo/Logo'
import { Icon } from '@iconify/react';
import Search from '../Search/Search';

type NavProps ={
  isDarkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar(props: NavProps):JSX.Element {
  const {isDarkMode, setDarkMode} = props
  return (
    <ul className={styles.Navbar}>
        <li className={styles.Navbar_li}>
          <Link to='/' itemProp="url">
            <Logo isNotCompleteLogo={false}/>
          </Link>
        </li>
        <div className={styles.NavLeftContainer}>
          <li><a href="https://frangardev.com/" target="_blank" rel="noopener noreferrer">Portafolio</a></li>
          <li><a href="mailto:frangardev@outlook.com">Contacto</a></li>
          <li>
            {isDarkMode
              ?<button onClick={()=>setDarkMode(false)}><Icon icon="pixelarticons:moon" /></button>
              :<button onClick={()=>setDarkMode(true)}><Icon icon="pixelarticons:sun-alt" /></button>
            }
          </li>
          {/* <li>
            <Search/>
          </li> */}
        </div>
    </ul>
  )
}

export default Navbar