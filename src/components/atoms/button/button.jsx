import React from 'react';

import { Button as Base, Box } from 'rebass';

export const Button = ({ as = 'a', children, ...props }) => (
  <Base
    as={as}
    {...props}
    mx="12px"
    className="button"
    py={[3]}
    px={[4]}
    minWidth={220}
    maxWidth="max-content"
    sx={{ position: 'relative', cursor: 'pointer', minWidth: 'max-content', letterSpacing: '.5', borderRadius: 0 }}
  >
    <Box
      as="span"
      sx={{
        display: 'inherit',
        position: 'relative',
        cursor: 'inherit',
        zIndex: 2,
        transform: 'translate(-0.5em, -0.5em)',
        transition: 'transform 150ms ease-out',
        textTransform: 'uppercase',
        fontWeight: 600,
        letterSpacing: '.5px',
      }}
    >
      {children}
    </Box>
  </Base>
);
