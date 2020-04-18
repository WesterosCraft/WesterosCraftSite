import React, { useMemo } from 'react'

import { graphql } from 'gatsby'
import { Heading } from 'rebass'
import { ProgressTable } from '../components/organisms/progressTable/progressTable'

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
        accessor: 'locationStatus',
      },
      {
        Header: 'Type',
        accessor: 'locationType',
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
  const memoData = useMemo(() => data && data.craft.entries, [])

  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        progress page
      </Heading>
      <ProgressTable columns={columns} data={memoData} />
    </>
  )
}

export const pageQuery = graphql`
  query progressQuery {
    craft {
      entries(site: "westeroscraft", section: "wiki", type: "wikiDestination") {
        title
        slug
      }
    }
  }
`

export default ProgressPage
