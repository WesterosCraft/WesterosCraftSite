/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box } from 'rebass';
import TextSlice from './Text/text';
import AnimatedImageText from './AnimatedImageText/animatedImageText';
import VideoPlayer from './VideoPlayer/videoPlayer';
import FeaturedBanner from './FeaturedBanner/featuredBanner';
import TextBanner from './TextBanner/textBanner';

const SliceZone = ({ slices }) => {
  const module = slices.map((slice, index) => {
    switch (slice.__typename) {
      case 'slices_text_BlockType':
        return <TextSlice input={slice} key={index} />;
      case 'slices_animatedImageWithText_BlockType':
        return <AnimatedImageText input={slice} key={index} />;
      case 'slices_video_BlockType':
        return <VideoPlayer input={slice} key={index} />;
      case 'slices_featureBanner_BlockType':
        return <FeaturedBanner input={slice} key={index} />;
      case 'slices_textBanner_BlockType':
        return <TextBanner input={slice} key={index} />;
      default:
        return null;
    }
  });
  return <Box px={[5, 8]}>{module}</Box>;
};

export default SliceZone;
