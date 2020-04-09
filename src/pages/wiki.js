import React from 'react'
import { graphql } from 'gatsby'

import { Heading } from 'rebass'
import { WikiLayout } from '../components/templates/wikiLayout'
import { WikiContent } from '../components/organisms/wikiContent'
import { WikiSliceZone } from '../components/slices/wikiSliceZone'
import { Flex } from 'rebass'

const WikiPage = ({ data }) => {
  console.log(data)
  return (
    <WikiLayout title={data.craft.entry.title || 'WesterosCraft Wiki'}>
      <WikiSliceZone slices={data.craft.entry.wikiSlices} />
    </WikiLayout>
  )
}

export const pageQuery = graphql`
  query wikiQuery {
    craft {
      entry(site: "westeroscraft", slug: "wiki") {
        ... on Craft_wiki_wikiStatic_Entry {
          title
          wikiSlices {
            ... on Craft_wikiSlices_text_BlockType {
              ...wikiText
            }
            ... on Craft_wikiSlices_entryGrid_BlockType {
              ...entryGrid
            }
          }
        }
      }
    }
  }
`

export default WikiPage
