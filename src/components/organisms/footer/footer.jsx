import React from 'react';
import { Box } from 'rebass';
import { FooterFrame } from '../../atoms/icons/footerFrame/footerFrame';

export const Footer = () => (
  <Box
    bg="gray.300"
    height={376}
    sx={{ position: 'relative', zIndex: 500, outline: '8px outset #505652', outlineOffset: '-8px' }}
    as="footer"
  >
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        left: 16,
        top: 16,
        transform: 'scaleX(-1)',
      }}
    />
    <FooterFrame style={{ width: '88px', height: '100px', position: 'absolute', right: 16, top: 16 }} />
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        left: 16,
        bottom: 16,
        transform: 'scaleX(-1) scaleY(-1)',
      }}
    />
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        right: 16,
        bottom: 16,
        transform: 'scaleY(-1)',
      }}
    />
  </Box>
);
