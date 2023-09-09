import React from 'react'
import * as styles from './Cards.module.css';

import { Link } from "gatsby"


function CardLong({post}) {
    const title = post.frontmatter.title || post.fields.slug
  return (
    <article
        className={styles.CardLong__container}
        itemScope
        itemType="http://schema.org/Article"
      >
           <header>
          <h2>
            
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline" className={styles.CardLong__title}>{title}</span>
            </Link>
          </h2>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
          <small>{post.frontmatter.date}</small>
        </section>
        <footer className={styles.CardLong__container_footer}>
          <div className={styles.tacks}>DES</div>
          <Link to={post.fields.slug} itemProp="url" className={styles.btn_ver}>Ver</Link>
        </footer>
      </article>
  )
}

export { CardLong }