import React, { useState } from 'react';
import { Box } from 'rebass';
import ReactPlayer from 'react-player';
import { configProps } from '../../../utils/helpers';
import { IoMdPlay } from 'react-icons/io';
import { VideoWrapper, VideoThumbnail, PlayButton } from './styledVideo';
import { urlFor } from '../../../utils/sanity';

export const VideoEmbed = ({ maxWidth, thumbnail, embedUrl, ...props }) => {
  const [isPlaying, setPlaying] = useState(false);

  return (
    <Box
      width={1}
      maxWidth={maxWidth || 756}
      mx="auto"
      className="video-embed"
      px={5}
      {...props}
      // {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}
    >
      <VideoWrapper
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        onClick={() => setPlaying(!isPlaying)}>
        <ReactPlayer
          className="react-player"
          url={embedUrl}
          playing={isPlaying}
          width="100%"
          height="100%"
          controls={true}
        />

        <PlayButton
          className="play-button"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          display={isPlaying ? 1 : 0}
          width={['65px', '100px']}
          height={['65px', '100px']}>
          <IoMdPlay color="#4d6371" />
        </PlayButton>
        {thumbnail && (
          <VideoThumbnail
            display={isPlaying ? 1 : 0}
            src={urlFor(thumbnail)}
            alt="Video thumbnail"
            loading="lazy"
          />
        )}
      </VideoWrapper>
    </Box>
  );
};
