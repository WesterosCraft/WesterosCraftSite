import React from 'react'
import { Box } from 'rebass'

export const VideoEmbed = () => (
  <Box
    sx={{
      width: '100%',
      height: 0,
      paddingBottom: 900 / 16 + '%',
      position: 'relative',
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0,
      },
    }}
  >
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/M7YuI0PST2Y"
      frameBorder="0"
      allowFullScreen
    />
  </Box>
)
