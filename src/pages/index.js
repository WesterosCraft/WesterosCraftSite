import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{data.craft.entry.title}</h1>
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
