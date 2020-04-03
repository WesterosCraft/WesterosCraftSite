import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Heading, Box, Flex, Image, Text } from 'rebass'
import { VideoEmbed } from '../components/organisms/videoEmbed'
import { SliceZone } from '../components/slices/sliceZone/sliceZone'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Flex as="section" className="homepage-hero" flexDirection="column" width={1} pt={12} px={5}>
        <Text>About Page</Text>
        <SliceZone slices={data.craft.entry.pageSlices} />
      </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    craft {
      entry(site: "westeroscraft", section: "about") {
        ... on Craft_about_about_Entry {
          pageSlices {
            ... on Craft_pageSlices_banner_BlockType {
              ...banner
            }
            ... on Craft_pageSlices_destinationSlider_BlockType {
              ...destinationSlider
            }
            ... on Craft_pageSlices_twoColumnText_BlockType {
              ...twoColumnText
            }
            ... on Craft_pageSlices_video_BlockType {
              ...video
            }
          }
        }
      }
    }
  }
`

export default AboutPage
