import React from 'react'
import { WikiLayout } from '../components/templates/wikiLayout'
import { graphql } from 'gatsby'
import { EntryCard } from '../components/atoms/entryCard'
import { Flex } from 'rebass'
import { Link } from 'gatsby'
import { regionSlugFormatter } from '../utility/regionSlugFormatter'

const RegionPage = ({ pageContext, data }) => {
  const regionEntries = data.craft.entries[0].children
  return (
    <WikiLayout
      title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
      breadcrumb={pageContext.breadcrumb}
    >
      <Flex flexDirection="row" flexWrap="wrap">
        {regionEntries.map((entry) => (
          <Link to={`/wiki/${regionSlugFormatter(entry.projectDetails[0].region)}/${entry.slug}`} key={entry.slug}>
            <EntryCard data={entry} key={entry.slug} />
          </Link>
        ))}
      </Flex>
    </WikiLayout>
  )
}

export const pageQuery = graphql`
  query RegionQuery($slug: [String]) {
    craft {
      entries(site: "westeroscraft", type: "wikiRegion", slug: $slug) {
        title
        ... on Craft_wiki_wikiRegion_Entry {
          title
          slug
          children {
            title
            slug
            ... on Craft_wiki_wikiDestination_Entry {
              images {
                url
              }
              projectDetails {
                ... on Craft_projectDetails_details_BlockType {
                  region
                  house
                  destinationType
                }
              }
            }
          }
        }
      }
    }
  }
`
export default RegionPage
