import React from 'react'
import * as styles from './Cards.module.css';

import { Link } from "gatsby"
import { Icon } from '@iconify/react';

import MiniTag from '../MiniTag/MiniTag';

function CardLong({post}) {
    const title = post.frontmatter.title || post.fields.slug
    const tags = post.frontmatter.tag.split(' ')
    const [colorTag, setColorTag] = React.useState(styles.develop)
    
    React.useEffect(()=>{
        switch (tags[0]) {
          case 'develop':
            setColorTag(styles.develop) 
            break;   
          case 'design':
            setColorTag(styles.design) 
            break;   
          case 'professional':
            setColorTag(styles.professional) 
            break;    
          default:
            setColorTag(styles.tutorial) 
            break;
        }
      },[])

    
  return (
    <article
        className={`${styles.CardLong__container} ${colorTag}`}
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
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
          <small>{post.frontmatter.date}</small>
        </section>
        <footer className={styles.CardLong__container_footer}>
          <div className={styles.tags__container}>
            {tags.map(tag => {
              return(
                <MiniTag key={tag} tag={tag} isFirstTag={tag === tags[0]}/>
              )
            })}
          </div>
          <Link to={post.fields.slug} itemProp="url" className={styles.btn_ver}>
            <Icon icon="memory:arrow-up" rotate={1} />
          </Link>
        </footer>
      </article>
  )
}

export { CardLong }