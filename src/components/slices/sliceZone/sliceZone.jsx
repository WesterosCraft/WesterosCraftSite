import React from 'react'
import { Banner } from '../banner'
import { DestinationSlide } from '../destinationSlide'

export const SliceZone = ({ slices }) => {
  const module = slices.map((slice, index) => {
    switch (slice.typeHandle) {
      case 'banner':
        return <Banner data={slice} key={index} />
      case 'destinationSlider':
        return <DestinationSlide data={slice.data} key={index} />
      default:
        return null
    }
  })

  return <>{module}</>
}
