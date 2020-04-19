import React, { useMemo } from 'react'

import { graphql } from 'gatsby'
import { Heading } from 'rebass'
import { ProgressTable } from '../components/organisms/progressTable/progressTable'
import _merge from 'lodash/merge'

const flatten = (data) =>
  data.reduce((arr, elem) => {
    arr.push(_merge(elem, elem.projectDetails[0]))
    delete elem.projectDetails
    return arr
  }, [])

const ProgressPage = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Destination',
        accessor: 'title',
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Status',
        accessor: 'destinationStatus',
      },
      {
        Header: 'Type',
        accessor: 'destinationType',
      },
      {
        Header: 'House',
        accessor: 'house',
      },
      {
        Header: 'Warp',
        accessor: 'warp',
      },
    ],
    [],
  )

  const memoData = useMemo(() => data && data.craft.entries, [data])

  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        progress page
      </Heading>
      <ProgressTable columns={columns} data={flatten(memoData)} />
    </>
  )
}

export const pageQuery = graphql`
  query progressQuery {
    craft {
      entries(site: "westeroscraft", section: "wiki", type: "wikiDestination") {
        title
        slug
        ... on Craft_wiki_wikiDestination_Entry {
          projectDetails {
            ... on Craft_projectDetails_details_BlockType {
              house
              region
              destinationStatus
              destinationType
              warp
              redoAvailable
              serverBuild
            }
          }
        }
      }
    }
  }
`

export default ProgressPage
