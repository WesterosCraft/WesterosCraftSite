import React from 'react'
import { WikiLayout } from '../components/templates/wikiLayout'

import { useStaticQuery, graphql } from 'gatsby'
import { WikiSliceZone } from '../components/slices/wikiSliceZone'

const MiscellaneousPage = ({ pageContext }) => {
  const data = useStaticQuery(graphql`
    {
      craft {
        entries(site: "westeroscraft", type: "wikiMiscellaneous") {
          title
          ... on Craft_wiki_wikiMiscellaneous_Entry {
            title
            wikiSlices {
              ... on Craft_wikiSlices_text_BlockType {
                ...wikiText
              }
              ... on Craft_wikiSlices_entryGrid_BlockType {
                ...entryGrid
              }
              ... on Craft_wikiSlices_imageGrid_BlockType {
                ...imageGrid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <WikiLayout
      title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
      breadcrumb={pageContext.breadcrumb}
    >
      <WikiSliceZone slices={data.craft.entries[0].wikiSlices} />
    </WikiLayout>
  )
}
export default MiscellaneousPage
