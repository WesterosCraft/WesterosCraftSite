import React from 'react';
import { Box, Heading } from 'rebass';
import { camelCaseFormatter } from '../../../utils/helpers';

export const WikiContent = ({ children, title }) => (
  <Box as="article" ml={[0, null, 13]} className="wiki-content" maxWidth={786} width={1}>
    <Heading variant="heading2" textAlign="left" pb={8}>
      {camelCaseFormatter(title)}
    </Heading>
    {children}
  </Box>
);
