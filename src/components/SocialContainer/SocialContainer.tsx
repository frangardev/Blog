import React from 'react'
import * as styles from './SocialContainer.module.css';

import Instagram from '../../assets/Instagram/Instagram'
import Twitter from '../../assets/Twitter/Twitter'
import Linkedin from '../../assets/Linkedin/Linkedin'
import GitHub from '../../assets/GitHub/GitHub'

function SocialContainer() {
  return (
    <ul className={styles.SocialContainer}>
        <li>
            <a
                href="https://www.instagram.com/frangardev/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Instagram/>
            </a>
        </li>
        <li>
            <a
                href="https://twitter.com/frangardev"
                aria-label="Twitter o X"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Twitter/>
            </a>
        </li>
        <li>
            <a
                href="https://www.linkedin.com/in/frangardev/"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin/>
            </a>
        </li>
    </ul>
  )
}

export default SocialContainer