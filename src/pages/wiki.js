import React from 'react'
import { graphql } from 'gatsby'

import { WikiLayout } from '../components/templates/wikiLayout'
import { WikiSliceZone } from '../components/slices/wikiSliceZone'

const WikiPage = ({ data }) => {
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
