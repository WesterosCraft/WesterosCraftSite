import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Flex } from 'rebass';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

const ImageSlider = ({ images }) => {
  return (
    <Flickity
      className="carousel"
      disableImagesLoaded={false}
      reloadOnUpdate
      static
      options={{
        adaptiveHeight: true,
      }}
    >
      {images &&
        images.map((image, i) => (
          <Flex justifyContent="center" alignItems="center" width={1}>
            <img key={i} src={image.url} alt="" />
          </Flex>
        ))}
    </Flickity>
  );
};

export default ImageSlider;
