import React from 'react';
import { Image } from 'rebass';
import { Circle } from './styledPlayButton';
// import PlayArrow from '../../../static/images/play-arrow.svg';

const PlayButton = ({ display }) => (
  <Circle
    className="play-button"
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    display={display ? 1 : 0}
    width={['65px', '120px']}
    height={['65px', '120px']}
  >
    {/* <Image src={PlayArrow} /> */}
  </Circle>
);

export default PlayButton;
