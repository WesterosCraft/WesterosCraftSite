import React from 'react';
import { Box } from 'rebass';

export const Tag = ({ children }) => (
  <Box
    className="tag"
    m={2}
    px={3}
    py={2}
    sx={{
      outline: '4px outset #50815e',
      outlineOffset: '-4px',
      backgroundColor: '#365B41',
    }}
    color="white"
  >
    {children}
  </Box>
);
