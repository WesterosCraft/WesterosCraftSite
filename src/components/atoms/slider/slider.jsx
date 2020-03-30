import React from 'react'
import { Box } from 'rebass'
import { CarouselProvider, DotGroup, Image, Slide, Slider } from 'pure-react-carousel'

export default ({ slides }) => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={slides.length}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
  >
    <h2>Horizontal Carousel (With Master Loading Spinner)</h2>
    <p>Horizontal Carousel with regular, non-zooming images and dotNumbers on the Dot Group.</p>
    <Slider>
      {slides.map((slide, index) => (
        <Slide>
          <Box sx={{ textAlign: 'center' }} width={1}>
            <Image sx={{ maxHeight: 360 }} src={slide.image[0].url} />
          </Box>
        </Slide>
      ))}
    </Slider>
    <DotGroup dotNumbers />
  </CarouselProvider>
)
