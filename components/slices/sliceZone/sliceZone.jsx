import React from 'react';
import { Banner } from '../banner';
import { DestinationSlide } from '../destinationSlide';
import { TwoColumnText } from '../twoColumnText/twoColumnText';
import { VideoEmbed } from '../../organisms/videoEmbed';
import { TwoColumnVideo } from '../twoColumnVideo';
import { ContentBanner } from '../contentBanner/contentBanner';
import { Timeline } from '../timeline';
import { SanityBlockContent } from '../../atoms/blockContent';

export const SliceZone = ({ slices }) => {
  const module = slices.map((slice, index) => {
    switch (slice._type) {
      case 'banner':
        return <Banner data={slice} key={index} />;
      case 'destinationSlider':
        return <DestinationSlide data={slice} key={index} />;
      case 'twoColumnText':
        return <TwoColumnText data={slice} key={index} />;
      case 'video':
        return <VideoEmbed data={slice} key={index} />;
      case 'richText':
        return <SanityBlockContent blocks={slice.copy} key={index} />;
      case 'twoColumnVideo':
        return <TwoColumnVideo data={slice} key={index} />;
      case 'contentBanner':
        return <ContentBanner data={slice} key={index} />;
      case 'timeline':
        return <Timeline data={slice} key={index} />;
      default:
        return null;
    }
  });

  return <>{module}</>;
};
