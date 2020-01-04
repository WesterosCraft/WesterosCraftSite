import { Box, Image } from 'rebass';
import styled from '@emotion/styled';

export const SliderWrapper = styled(Box)`
  .slick-thumb li,
  .slick-thumb a {
    width: 60px;
    height: 45px;
  }
  .slick-dots li,
  .slick-dots li button {
    cursor: pointer;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    margin: 0 5px;
    padding: 0;
  }
  .slick-thumb {
    bottom: -45px;
  }
  .slick-dots {
    margin-left: 0;
  }
  .slick-dots {
    position: absolute;
    bottom: -60px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-slider-container {
    /* max-height: 500px; */
  }

  .slick-next:before,
  .slick-prev:before {
    color: black;
  }

  img {
    width: auto !important;
  }
`;
