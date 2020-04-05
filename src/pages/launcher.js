import React from 'react'

import { Heading } from 'rebass'
import { graphql } from 'gatsby'
import { SliceZone } from '../components/slices/sliceZone/sliceZone'

const LauncherPage = ({ data }) => (
  <>
    <Heading variant="heading2" textAlign="center">
      {data.craft.entry.heading}
    </Heading>
    <SliceZone slices={data.craft.entry.pageSlices} />
  </>
)

export const pageQuery = graphql`
  query launcherQuery {
    craft {
      entry(site: "westeroscraft", section: "launcher") {
        ... on Craft_launcher_launcher_Entry {
          heading
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
            ... on Craft_pageSlices_text_BlockType {
              ...text
            }
            ... on Craft_pageSlices_contentBanner_BlockType {
              ...contentBanner
            }
          }
        }
      }
    }
  }
`

export default LauncherPage
