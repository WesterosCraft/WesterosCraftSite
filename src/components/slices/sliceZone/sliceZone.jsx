import React from 'react'
import { Banner } from '../banner'
import { DestinationSlide } from '../destinationSlide'
import { TwoColumnText } from '../twoColumnText/twoColumnText'

export const SliceZone = ({ slices }) => {
  const module = slices.map((slice, index) => {
    switch (slice.typeHandle) {
      case 'banner':
        return <Banner data={slice} key={index} />
      case 'destinationSlider':
        return <DestinationSlide data={slice} key={index} />
      case 'twoColumnText':
        return <TwoColumnText data={slice} key={index} />
      default:
        return null
    }
  })

  return <>{module}</>
}
