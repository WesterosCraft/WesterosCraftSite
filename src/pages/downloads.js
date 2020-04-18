import React from 'react'

import { graphql } from 'gatsby'
import { Heading } from 'rebass'
import { SliceZone } from '../components/slices/sliceZone/sliceZone'

const DownloadPage = ({ data }) => {
  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        Download Page{' '}
      </Heading>
    </>
  )
}

// export const pageQuery = graphql`
//   query progressQuery {
//     craft {
//       entries(site: "westeroscraft", section: "wiki", type: "wikiDestination") {
//         title
//         slug
//       }
//     }
//   }
// `

export default DownloadPage
