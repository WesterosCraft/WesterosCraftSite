/* eslint-disable react/no-array-index-key */
import React from 'react';
import TextSlice from './Text/text';
import AnimatedImageText from './AnimatedImageText/animatedImageText';
import VideoPlayer from './VideoPlayer/videoPlayer';

const SliceZone = ({ slices }) => {
  const module = slices.map((slice, index) => {
    console.log(slice);
    switch (slice.__typename) {
      case 'text':
        return <TextSlice input={slice} key={index} />;
      case 'animated_image_text':
        return <AnimatedImageText input={slice} key={index} />;
      case 'slices_video_BlockType':
        return <VideoPlayer input={slice} key={index} />;
      default:
        return null;
    }
  });
  return <>{module}</>;
};

export default SliceZone;
