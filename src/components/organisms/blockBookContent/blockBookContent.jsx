import React from 'react';
import { Box, Heading } from 'rebass';

export const BlockBookContent = ({ children, title }) => (
  <Box as="article" ml={[0, null, 13]} className="block-book-content" maxWidth={786} width={1}>
    <Heading variant="heading2" textAlign="left" pb={8}>
      {title}
    </Heading>
    {children}
  </Box>
);
