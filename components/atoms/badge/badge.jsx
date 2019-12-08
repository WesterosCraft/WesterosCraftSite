import React from 'react';
import { Box, Text } from 'rebass';
import hexToRgba from 'hex-to-rgba';

const Badge = ({ children, variant, ...props }) => (
  <Box
    bg={hexToRgba(variant, '0.1')}
    textAlign="center"
    width="fit-content"
    px={4}
    py={1}
    minWidth={120}
    sx={{
      borderRadius: '4px',
    }}
  >
    <Text variant="progress" color={variant} fontWeight="bold" {...props}>
      {children}
    </Text>
  </Box>
);

export default Badge;
