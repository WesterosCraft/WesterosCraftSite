import React from 'react';
import { Image } from 'rebass';
import { Carousel } from 'react-responsive-carousel';
import { urlFor } from '../../../utils/sanity';

const Slider = ({ slides, ...props }) => (
  <Carousel {...props}>
    {slides.map((slide, index) => (
      <div key={index}>
        <Image
          alt={slide.slideName || ''}
          src={urlFor(slide.asset._ref)}
          width={[1, null, '632px']}
          maxWidth={632}
          height={['auto', null, '360px']}
          loading="lazy"
        />
      </div>
    ))}
  </Carousel>
);

export default Slider;