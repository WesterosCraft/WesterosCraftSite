import React from 'react';
import { Box, Flex, Image } from 'rebass';
import { TwoColumnLayout } from '../../organisms/twoColumnLayout';
import { VideoEmbed } from '../../organisms/videoEmbed';
import ScrollAnimation from 'react-animate-on-scroll';
import { SanityBlockContent } from '../../atoms/blockContent';

export const TwoColumnVideo = ({ data }) => (
  <Box className="two-column-video">
    <TwoColumnLayout py={[120, null, 160]}>
      <TwoColumnLayout.ColumnOne>
        <ScrollAnimation animateIn="fadeInLeft" offset={200} animateOnce>
          <SanityBlockContent blocks={data.textColumn.copy} />
          {data.images && (
            <Flex width={1} flexWrap="wrap">
              {data.images.map((image) =>
                image.singleLink ? (
                  <Box
                    as="a"
                    href={image.singleLink}
                    width={[1, 1 / 2]}
                    py={3}
                    sx={{ textAlign: ['center', null, null, 'left'] }}
                    key={image.url}>
                    <Image src={image.url} maxHeight={36} alt={image.title || ''} />
                  </Box>
                ) : (
                  <Box
                    width={[1, 1 / 2]}
                    py={3}
                    sx={{ textAlign: ['center', null, null, 'left'] }}
                    key={image.url}>
                    <Image src={image.url} maxHeight={36} alt={image.title || ''} />
                  </Box>
                )
              )}
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
