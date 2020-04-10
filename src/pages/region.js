import React from 'react'
import { WikiLayout } from '../components/templates/wikiLayout'

const RegionPage = ({ pageContext, data }) => {
  console.log('REGION DATA', pageContext)
  return <WikiLayout title={pageContext.data.title || 'WesterosCraft Wiki'}></WikiLayout>
}
export default RegionPage
