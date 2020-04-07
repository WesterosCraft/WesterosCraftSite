import { graphql } from 'gatsby'

export const wikiText = graphql`
  fragment wikiText on Craft_wikiSlices_text_BlockType {
    typeHandle
    redactor
  }
`

export const entryGrid = graphql`
  fragment entryGrid on Craft_wikiSlices_entryGrid_BlockType {
    typeHandle
    heading
    entryList {
      title
      slug
      ... on Craft_wiki_wikiDestination_Entry {
        images {
          url
        }
      }
    }
  }
`
