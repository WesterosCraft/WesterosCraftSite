import React from 'react';
import { Box, Flex, Image } from 'rebass';
import { TwoColumnLayout } from '../../organisms/twoColumnLayout';
import { VideoEmbed } from '../../organisms/videoEmbed';
import { Redactor } from '../../atoms/redactor/redactor';
import ScrollAnimation from 'react-animate-on-scroll';
import { Doodle } from '../../atoms/doodle';

export const TwoColumnVideo = ({ data }) => (
  <Box className="two-column-video">
    <TwoColumnLayout py={[120, null, 160]}>
      <TwoColumnLayout.ColumnOne>
        <Redactor dangerouslySetInnerHTML={{ __html: data.children[0].redactor }} />
        {data.images && (
          <Flex width={1} flexWrap="wrap">
            {data.images.map((image) => (
              <Box width={[1, 1 / 2]} py={3} sx={{ textAlign: ['center', null, null, 'left'] }} key={image.url}>
                <Image src={image.url} maxHeight={36} />
              </Box>
            ))}
          </Flex>
        )}
      </TwoColumnLayout.ColumnOne>
      <TwoColumnLayout.ColumnTwo ml={0} sx={{ position: 'relative' }}>
        <Box
          className="doodle-container"
          width={1}
          height="100%"
          sx={{ position: 'absolute', bottom: [-10, null, 0], right: 0 }}
        >
          {/* <Doodle
            rule={`
            :doodle {
              @grid: 18 / 100%;
              background: #fff;
            }
            background: rgba(
              80, 86, 82,
              calc(@row * @col / @size)
            );
            transform: scale(@rand(.2, .5));
        `}
          /> */}
        </Box>
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <VideoEmbed data={data.children[1]} p={0} />
        </ScrollAnimation>
      </TwoColumnLayout.ColumnTwo>
    </TwoColumnLayout>
  </Box>
);
