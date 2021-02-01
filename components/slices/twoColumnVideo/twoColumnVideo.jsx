import React from 'react';
import { Box, Flex, Image } from 'rebass';
import { TwoColumnLayout } from '../../organisms/twoColumnLayout';
import { VideoEmbed } from '../../organisms/videoEmbed';
import ScrollAnimation from 'react-animate-on-scroll';
import { SanityBlockContent } from '../../atoms/blockContent';
import { urlFor } from '../../../utils/sanity';
import SVG from 'react-inlinesvg';

export const TwoColumnVideo = ({ data }) => (
  <Box className="two-column-video">
    <TwoColumnLayout py={[120, null, 160]}>
      <TwoColumnLayout.ColumnOne>
        <ScrollAnimation animateIn="fadeInLeft" offset={200} animateOnce>
          <SanityBlockContent blocks={data.textColumn.copy} />
          {data.featuredImages && (
            <Flex width={1} flexWrap="wrap">
              {data.featuredImages.map((image, i) => (
                <Box
                  as={image.link ? 'a' : 'div'}
                  href={image.link || null}
                  target={image.link ? '_target' : null}
                  width={[1, 1 / 2]}
                  py={3}
                  sx={{ textAlign: ['center', null, null, 'left'] }}
                  key={i}>
                  {image.inject ? (
                    <SVG src={urlFor(image.asset._ref).toString()} title={image.alt || ''} />
                  ) : (
                    <Image src={urlFor(image.asset._ref)} maxHeight={36} alt={image.alt || ''} />
                  )}
                </Box>
              ))}
            </Flex>
          )}
        </ScrollAnimation>
      </TwoColumnLayout.ColumnOne>
      <TwoColumnLayout.ColumnTwo ml={0} sx={{ position: 'relative' }}>
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <VideoEmbed embedUrl={data.videoLink} thumbnail={data.videoThumbnail.asset._ref} p={0} />
        </ScrollAnimation>
      </TwoColumnLayout.ColumnTwo>
    </TwoColumnLayout>
  </Box>
);
