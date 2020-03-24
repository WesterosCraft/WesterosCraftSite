import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Heading, Box } from 'rebass'
import {Button } from '../components/button';

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
      <Heading as="h4" variant="heading4">
        {data.craft.entry.title}
      </Heading>
      <Heading as="h5" variant="heading5">
        {data.craft.entry.title}
      </Heading>
      <Box bg="black" p={5}>
        <Button variant="white">White Button</Button>
        <Button variant="red">Red Button</Button>
      </Box>
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
