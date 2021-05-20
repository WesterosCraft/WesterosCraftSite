import React from 'react';
import { Flex, Box } from 'rebass';

export const QuoteBlock = ({ content = '', author = '' }) => (
  <Box>
    <Flex as="blockquote">{content}</Flex>
    <Box>{author}</Box>
  </Box>
);
