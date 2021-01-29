import React from 'react';
import { Box, Heading } from 'rebass';

export const BlockBookContent = ({ children, title }) => {
  return (
    <Box as="article" ml={[0, null, 13]} className="block-book-content" maxWidth={786} width={1}>
      <Heading variant="heading2" textAlign="center" pb={8}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};
