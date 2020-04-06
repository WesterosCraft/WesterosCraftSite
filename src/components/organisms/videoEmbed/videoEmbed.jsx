import React, { useState } from 'react'
import { Box } from 'rebass'
import ReactPlayer from 'react-player'
import { configProps } from '../../../utility/helpers'

export const VideoEmbed = ({ data }) => {
  const [overlay, setOverlay] = useState(true)

  return (
    <Box
      width={1}
      maxWidth={data.maxWidth || 756}
      mx="auto"
      className="video-embed"
      {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}
    >
      <Box
        sx={{
          position: 'relative',
          paddingTop: '56.25%',
          '.react-player__shadow': {
            zIndex: 5,
          },
        }}
      >
        <ReactPlayer
          url={data.videoUrl}
          light={data.thumbnail[0].url || ''}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          width="100%"
          height="100%"
          onStart={() => {
            setOverlay(false)
          }}
        />
        {overlay && (
          <Box
            className="overlay"
            sx={{
              background: 'linear-gradient(270deg, rgba(155, 19, 19, 0.9) 0%, rgba(230, 105, 105, 0.6) 100%)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </Box>
    </Box>
  )
}
