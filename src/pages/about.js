import React from 'react'

import { graphql } from 'gatsby'
import { Heading } from 'rebass'
import { SliceZone } from '../components/slices/sliceZone/sliceZone'

const AboutPage = ({ data }) => {
  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.craft.entry.heading}
      </Heading>
      <SliceZone slices={data.craft.entry.pageSlices} />
    </>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    craft {
      entry(site: "westeroscraft", section: "about") {
        ... on Craft_about_about_Entry {
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
          }
        }
      }
    }
  }
`

export default AboutPage
