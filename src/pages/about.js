import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Heading, Box, Flex, Image, Text } from 'rebass'
import { Button } from '../components/button'
import { HomeBar } from '../components/homeBar'
import { TwoColumnLayout } from '../components/twoColumnLayout'
import { VideoEmbed } from '../components/videoEmbed'
import { Banner } from '../components/banner'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
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
