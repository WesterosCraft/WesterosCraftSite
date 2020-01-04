import React from 'react';
import Slider from 'react-slick';
import { Image } from 'rebass';
import { SliderWrapper } from './styledImageSlider';

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    dots: true,
    className: 'slick-slider-container',
    dotsClass: 'slick-dots slick-thumb',
    customPaging(i) {
      return (
        <a>
          <Image width={760} height="100%" src={images[i].url} />
        </a>
      );
    },
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images.map((image, i) => (
          <Image
            src={image.url}
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ImageSlider;
