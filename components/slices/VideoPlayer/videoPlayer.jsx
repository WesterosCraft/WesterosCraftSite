import React from 'react';
import { Flex } from 'rebass';
import { Container } from './styledVideoPlayer';
import Video from '../../molecules/video/video';

const VideoPlayer = ({ input }) => {
  return input.video ? (
    <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Container mt={[2, 1, 0]} px={[8, 0]}>
          <Video video={input.primary} />
        </Container>
      </Flex>
    </>
  ) : (
    ''
  );
};

export default VideoPlayer;
