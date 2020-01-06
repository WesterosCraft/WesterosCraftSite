import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Flex } from 'rebass';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = ({ images }) => {
  return (
    <Carousel>
      {images &&
        images.map((image, i) => (
          <Flex justifyContent="center" alignItems="center" style={{ height: '500px' }}>
            <img key={i} src={image.url} style={{ width: 'auto', maxHeight: '100%' }} alt="" />
          </Flex>
        ))}
    </Carousel>
  );
};

export default ImageSlider;
