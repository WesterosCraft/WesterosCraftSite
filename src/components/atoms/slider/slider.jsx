import React from 'react'
import { Image } from 'rebass'
import { Carousel } from 'react-responsive-carousel'

export default ({ slides, ...props }) => (
  <Carousel {...props}>
    {slides.map((slide, index) => (
      <div key={index}>
        <Image src={slide.image[0].url} />
      </div>
    ))}
  </Carousel>
)
