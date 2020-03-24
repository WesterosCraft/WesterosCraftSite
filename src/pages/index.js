import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Heading } from 'rebass'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Heading as="h1" variant="heading1">
        {data.craft.entry.title}
      </Heading>
      <Heading as="h2" variant="heading2">
        {data.craft.entry.title}
      </Heading>
      <Heading as="h3" variant="heading3">
        {data.craft.entry.title}
      </Heading>
    </Layout>
  )
}

export const pageQuery = graphql`
  query homeQuery {
    craft {
      entry(site: "westeroscraftNew", section: "homePage") {
        title
      }
    }
  }
`

export default IndexPage
