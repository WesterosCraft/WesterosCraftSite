import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Heading, Box, Flex, Image, Text } from 'rebass'
import { VideoEmbed } from '../components/organisms/videoEmbed'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Flex as="section" className="homepage-hero" flexDirection="column" width={1} pt={12} px={5}>
        <Text>About Page</Text>
        <VideoEmbed />
      </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    craft {
      entry(site: "westeroscraftNew", section: "aboutPage") {
        title
      }
    }
  }
`

export default AboutPage
