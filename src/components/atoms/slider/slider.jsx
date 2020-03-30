import React from 'react'
import { Box, Image } from 'rebass'
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel'

export default ({ slides }) => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={slides.length}
    naturalSlideWidth={860}
    naturalSlideHeight={500}
  >
    <Slider>
      {slides.map((slide, index) => (
        <Slide index={index}>
          <Image src={slide.image[0].url} />
        </Slide>
      ))}
    </Slider>
    <DotGroup dotNumbers />
  </CarouselProvider>
)
