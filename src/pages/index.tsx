import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {CardLong} from "../components/Card/CardLong"

type BlogIndexType = {
  data: {
    allMarkdownRemark:{
      nodes:[{
        excerpt:string,
        fields:{
          slug:string
        },
        frontmatter:{
          date:string,
          description:string,
          tag:string,
          title:string
        }
      }] | []
    },
    site: {
      siteMetadata:{
        title:string
      }
    }
  },
  location: PageProps['location']
}

const BlogIndex = ({ data, location }: BlogIndexType): JSX.Element => {
  const siteTitle = data.site.siteMetadata.title || `Title hey`
  const posts = data.allMarkdownRemark.nodes  
  
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
  return (
    <Layout location={location} title={siteTitle}>
      <h2>ARTÍCULOS RECIENTES</h2>
      <ol style={{ listStyle: `none`, padding: '0', width: '100%' }}>
        {posts.map(post => {
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
export const Head = () => <Seo title="Home" />

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
