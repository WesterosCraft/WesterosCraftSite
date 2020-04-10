import React from 'react'
import { WikiLayout } from '../components/templates/wikiLayout'

const RegionPage = ({ pageContext }) => {
  return (
    <WikiLayout title={pageContext.data.title || 'WesterosCraft Wiki'} breadcrumb={pageContext.breadcrumb}></WikiLayout>
  )
}
export default RegionPage
