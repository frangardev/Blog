import React from "react";
import { Link } from "gatsby"
import Logo from "../../assets/Logo/Logo";
import "./Footer.css";

import GitHub from "../../assets/GitHub/GitHub";
import Linkedin from "../../assets/Linkedin/Linkedin";
import Twitter from "../../assets/Twitter/Twitter";
import Instagram from "../../assets/Instagram/Instagram";

type FooterProps ={
    isHome?: boolean
}
function Footer({ isHome }:FooterProps):JSX.Element {
    // const {isHome} = pros
  return (
    <footer className={`footer ${isHome ? 'footer--home' : 'footer--all'}`}>
      <div className="footer__flex--container">
        <Link to='/' className="footer__logo">
          <Logo isNotCompleteLogo={true} />
          <p>Frangardev</p>
        </Link>

      </div>

      <ul className="footer__icons--container">
        <li>
          <a
            href="https://www.linkedin.com/in/frangardev/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/frangardev"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frangardev"
            aria-label="Twitter o X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/frangardev"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
      </ul>

      <p className="footer__text">
        Hecho con &#128159; en React por <span>
            <a 
                href="https://frangardev.github.io/redes/"
                target="_blank"
                rel="noopener noreferrer"
            >
                @frangardev
            </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;