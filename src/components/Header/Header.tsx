import React from "react"
import * as styles from './Header.module.css';
import { StaticImage } from "gatsby-plugin-image"

// import imgHeader = '../../'

function Header() {
  return <section className={styles.header}>
    <div className={styles.textContainer}>

    <h1 className={styles.title}>¡Hola, bienvenido a mi blog!</h1>
    <p className={styles.text}>Este es un blog gratuito donde comparto mi vida y las cosas que voy aprendiendo como profesionista para apoyar y compartir con otros nuevos profesionistas</p>
    </div>
    <StaticImage
        className={styles.img}
        formats={["auto", "webp", "avif"]}
        src="../../images/image-header.png"
        alt="Dibjo de Fran"
      />
  </section>
}

export default Header
