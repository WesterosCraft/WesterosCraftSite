import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoWrapper, VideoThumbnail, VideoOverlay } from './styledVideo';
import PlayButton from '../../atoms/playButton/playButton';

const Video = ({ video }) => {
  const [isPlaying, setPlaying] = useState(false);

  console.log(video);

  return (
    <VideoWrapper
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      onClick={() => setPlaying(!isPlaying)}
    >
      <ReactPlayer
        className="react-player"
        url={video.video.embed_url}
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
