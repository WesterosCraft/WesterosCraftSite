import React from 'react';
import { Box, Heading } from 'rebass';

export const WikiContent = ({ children, title }) => (
  <Box as="article" ml={[0, null, 13]} className="wiki-content" maxWidth={786} width={1}>
    <Heading variant="heading2" textAlign="left" pb={8}>
      {title}
    </Heading>
    {children}
  </Box>
);
