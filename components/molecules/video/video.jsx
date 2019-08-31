import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoWrapper, VideoThumbnail, VideoOverlay } from './StyledVideo';
import PlayButton from '../../atoms/PlayButton/PlayButton';

const Video = ({ video, thumb }) => {
  const [isPlaying, setPlaying] = useState(false);
  return (
    <VideoWrapper
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      onClick={() => setPlaying(!isPlaying)}
    >
      <ReactPlayer
        className="react-player"
        url={video.embed_url}
        playing={isPlaying}
        width="100%"
        height="100%"
        controls={true}
      />
      <PlayButton display={isPlaying ? 1 : 0} />
      <VideoOverlay display={isPlaying ? 1 : 0} />
      <VideoThumbnail display={isPlaying ? 1 : 0} src={thumb.url} />
    </VideoWrapper>
  );
};

export default Video;
