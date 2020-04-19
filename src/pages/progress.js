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

function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || '')
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

const ProgressPage = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Destination',
        accessor: 'title',
        filterable: false,
      },
      {
        Header: 'Region',
        accessor: 'region',
        filterable: false,
      },
      {
        Header: 'Status',
        accessor: 'destinationStatus',
        filterable: true,
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
      {
        Header: 'Type',
        accessor: 'destinationType',
        filterable: false,
      },
      {
        Header: 'House',
        accessor: 'house',
        filterable: false,
      },
      {
        Header: 'Warp',
        accessor: 'warp',
        filterable: false,
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
