import React from 'react'

import { Text } from '../text'
import { EntryGrid } from '../entryGrid'

export const WikiSliceZone = ({ slices }) => {
  const module = slices.map((slice, index) => {
    switch (slice.typeHandle) {
      case 'text':
        return <Text data={slice} key={index} wiki />
      case 'entryGrid':
        return <EntryGrid data={slice} key={index} />
      default:
        return null
    }
  })

  return <>{module}</>
}
