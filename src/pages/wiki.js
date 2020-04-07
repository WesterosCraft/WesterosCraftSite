import React from 'react'
import { graphql } from 'gatsby'

import { Heading } from 'rebass'
import { WikiLayout } from '../components/templates/wikiLayout'
import { WikiNav } from '../components/organisms/wikiNav/wikiNav'
import { WikiContent } from '../components/organisms/wikiContent'
import { WikiSliceZone } from '../components/slices/wikiSliceZone'

const WikiPage = ({ data }) => {
  return (
    <WikiLayout>
      <WikiNav />
      <WikiContent>
        <Heading variant="heading2" textAlign="left" pb={8}>
          Wiki Home Page
        </Heading>
        <WikiSliceZone slices={data.craft.entry.wikiSlices} />
      </WikiContent>
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
