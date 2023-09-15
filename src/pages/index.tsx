import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {CardLong} from "../components/Card/CardLong"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title hey`
  const posts = data.allMarkdownRemark.nodes

  console.log('------posts------');
  console.log(posts);
  

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  // React.useEffect(()=>{
  //   const isDarkUser = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  //   const body = document.querySelector('body') 
  //   body.className = isDarkUser ? 'dark' : ''
  // },[])
  return (
    <Layout location={location} title={siteTitle}>
      {/* <Bio /> */}
      <h2>ARTÍCULOS RECIENTES</h2>
      <ol style={{ listStyle: `none`, padding: '0', width: '100%' }}>
        {posts.map(post => {
          // const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <CardLong post={post}/>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tag
        }
      }
    }
  }
`
