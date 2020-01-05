import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Image } from 'rebass';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = ({ images }) => {
  return <Carousel thumbWidth={65}>{images && images.map((image, i) => <img key={i} src={image.url} />)}</Carousel>;
};

export default ImageSlider;
