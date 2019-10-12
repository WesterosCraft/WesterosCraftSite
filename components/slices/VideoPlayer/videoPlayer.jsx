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
      mt={input.marginTop}
      mb={input.marginBottom}
      pt={input.paddingTop}
      pb={input.paddingBottom}
    >
      <Container mt={[2, 1, 0]} px={[8, 0]}>
        <Video video={input.videoEmbed} thumbnail={input.thumbnail[0].url} />
      </Container>
    </Flex>
  ) : (
    ''
  );
};

export default VideoPlayer;
