import React from 'react';
import { Box } from 'rebass';
import { Carousel } from 'react-responsive-carousel';

export default ({ slides, ...props }) => (
  <Carousel {...props}>
    {slides.map((slide, index) => (
      <div key={index}>
        <Box
          sx={{
            backgroundImage: `url(${slide.image[0].url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
          width={[1, null, '632px']}
          maxWidth={632}
          height={['360px']}
        />
      </div>
    ))}
  </Carousel>
);
