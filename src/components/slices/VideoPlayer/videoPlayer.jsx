import React from 'react';
import { Flex } from 'rebass';
import { Container } from './styledVideoPlayer';
import Video from '../../molecules/video/video';

const VideoPlayer = ({ input }) => {
  return input.videoEmbed ? (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt={[input.marginTop]}
      mb={[input.marginBottom]}
      pt={input.paddingTop}
      pb={input.paddingBottom}
    >
      <Container
        mt={[2, 1, 0]}
        sx={{
          boxShadow:
            '0px 1.66035px 5.96162px rgba(0, 0, 0, 0.0539848), 0px 3.99006px 13.1948px rgba(0, 0, 0, 0.0745653), 0px 7.51293px 22.6612px rgba(0, 0, 0, 0.090447), 0px 13.4018px 36.4944px rgba(0, 0, 0, 0.107839), 0px 25.0666px 60.5163px rgba(0, 0, 0, 0.133801), 0px 60px 114px rgba(0, 0, 0, 0.21)',
        }}
      >
        <Video video={input.videoEmbed} thumbnail={input.thumbnail[0].url} />
      </Container>
    </Flex>
  ) : (
      ''
    );
};

export default VideoPlayer;
