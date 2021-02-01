import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { urlFor } from '../../../utils/sanity';

const Slider = ({ slides, ...props }) => (
  <Carousel {...props}>
    {slides.map((slide, index) => {
      const image = urlFor(slide.asset._ref).toString();
      return (
        <div key={index}>
          <Image alt={slide.slideName || ''} src={image} width={632} height={360} loading="lazy" />
        </div>
      );
    })}
  </Carousel>
);

export default Slider;
