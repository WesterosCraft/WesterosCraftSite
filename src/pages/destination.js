import React from 'react'
import { WikiLayout } from '../components/templates/wikiLayout'
import { Redactor } from '../components/atoms/redactor/redactor'

const DestinationPage = ({ pageContext }) => {
  return (
    <WikiLayout
      title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
      breadcrumb={pageContext.breadcrumb}
    >
      {pageContext.data && pageContext.data.copy && (
        <Redactor dangerouslySetInnerHTML={{ __html: pageContext.data.copy }} />
      )}
    </WikiLayout>
  )
}

export default DestinationPage
