import React from 'react'
import { Box, Image } from 'rebass'
// import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel'
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
