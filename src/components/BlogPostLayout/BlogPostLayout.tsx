import React from 'react'
import * as styles from './BlogPostLayout.module.css';
import SocialContainer from '../SocialContainer/SocialContainer';

function BlogPostLayout({post}) {
  return (
    <article
        className={styles.BlogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <SocialContainer/>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
        </footer>
      </article>
  )
}

export default BlogPostLayout