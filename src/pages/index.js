import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import Image2 from '../components/image2'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'


const IndexPage = () => (
  <Layout>
    <StaticQuery query={homeQuery} />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>TEST</h1>
    <p>Enjoy this barebones starter for Craft CMS and Gatsby.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Image2 />
    </div>
  </Layout>
)


const homeQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default IndexPage
