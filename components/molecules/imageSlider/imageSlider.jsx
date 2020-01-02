import React from 'react';
import Slider from 'react-slick';
import { Image, Box } from 'rebass';

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    fade: true,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    customPaging(i) {
      return (
        <a>
          <Image width={1} height="100%" src={images[i].url} />
        </a>
      );
    },
  };
  return (
    <Slider {...settings}>
      {images.map((image, i) => (
        <Image src={image.url} width={1} height="100%" />
      ))}
    </Slider>
  );
};

export default ImageSlider;
