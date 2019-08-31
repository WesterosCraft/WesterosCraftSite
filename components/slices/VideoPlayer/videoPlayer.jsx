import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Flex } from 'rebass';
import { Caption, Container } from './StyledVideoPlayer';
import Video from '../../molecules/Video/Video';

const VideoPlayer = ({ input }) => {
  return input.video ? (
    <>
      <Caption fontSize={[2]} px={8}>
        {RichText.asText(input.video_caption)}
      </Caption>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Container mt={[2, 1, 0]} px={[8, 0]}>
          <Video video={input.video} thumb={input.thumbnail} />
        </Container>
      </Flex>
    </>
  ) : (
    ''
  );
};

export default VideoPlayer;
