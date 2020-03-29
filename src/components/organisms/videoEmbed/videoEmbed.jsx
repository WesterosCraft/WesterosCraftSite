import React, { useState } from 'react'
import { Box } from 'rebass'
import ReactPlayer from 'react-player'

export const VideoEmbed = () => {
  const [overlay, setOverlay] = useState(true)
  return (
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
        url="https://www.youtube.com/embed/M7YuI0PST2Y"
        light="https://westeroscraft.com/web/assets/images/video-cover.png"
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
            background:
              'linear-gradient(270deg, rgba(155, 19, 19, 0.9) 0%, rgba(230, 105, 105, 0.6) 100%)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </Box>
  )
}
