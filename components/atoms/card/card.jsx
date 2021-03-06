import React from 'react';
import { Box } from 'rebass';

export const Card = ({ children, color = '#333333' }) => (
  <Box
    sx={{
      position: 'relative',
      boxShadow: `0 0 0 2px ${color}`,
      padding: 0,
      background: color,
      zIndex: 1,
      width: 'auto'
    }}
    mt={[5]}
    mr={[0, null, 5]}
    minWidth={128}>
    <Box
      width={[1, null, 240]}
      sx={{
        background: 'var(--theme-colors-background)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        '&:before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 1,
          borderBottom: `5px solid ${color}`
        }
      }}
      px={4}
      py={5}>
      {children}
    </Box>
  </Box>
);
