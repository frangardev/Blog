import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type NoFoundPageType = {
  data: {
    site: {
      siteMetadata:{
        title:string
      }
    }
  },
  location: PageProps['location']
}

const NotFoundPage = ({ data, location }: NoFoundPageType) => {
  const siteTitle:string = data.site.siteMetadata.title 
  // const siteTitle:string = 'Hey---' 

  return (
    <Layout location={location} title={siteTitle}>
      <h1>404: Not Found page</h1>
      <p>You just hit a route <span>{siteTitle}</span> that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
