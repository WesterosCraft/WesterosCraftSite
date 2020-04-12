import React from 'react'

import { graphql } from 'gatsby'
import { Heading, Box, Flex, Image } from 'rebass'
import { HomeBar } from '../components/atoms/homeBar'
import { SliceZone } from '../components/slices/sliceZone/sliceZone'

const IndexPage = ({ data }) => {
  return (
    <Flex as="section" className="homepage-hero" flexDirection="column" width={1} pt={12} px={5}>
      <Box textAlign="center">
        <Heading as="h1" variant="heading1">
          Seven Kingdoms. All Blocks.
        </Heading>
        <Heading as="h2" variant="heading2" mt={5}>
          A Minecraft Server
        </Heading>
      </Box>
      <Box mx="auto">
        <Image src="https://westeroscraft.com/web/assets/images/baelors-1.png" alt="Baelors" />
        <HomeBar />

        <SliceZone slices={data.craft.entry.pageSlices} />
      </Box>
    </Flex>
  )
}

export const pageQuery = graphql`
  query homeQuery {
    craft {
      entry(site: "westeroscraft", section: "home") {
        ... on Craft_home_home_Entry {
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
            ... on Craft_pageSlices_twoColumnVideo_BlockType {
              ...twoColumnVideo
            }
            ... on Craft_pageSlices_text_BlockType {
              ...text
            }
          }
        }
      }
    }
  }
`

export default IndexPage
