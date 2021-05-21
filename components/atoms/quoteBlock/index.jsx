import React from 'react';
import { Flex, Box, Text } from 'rebass';

export const QuoteBlock = ({ content = '', author = '' }) => (
  <Box width={800} mx="auto">
    <Flex as="blockquote" p={10} bg="var(--theme-colors-alt-background)">
      <Text
        lineHeight={2}
        variant="heading3"
        fontStyle="italic"
        fontWeight="normal"
        color="var(--theme-colors-alt-text, #ffffff)">
        {content}
      </Text>
    </Flex>
    <Box width="fit-content" bg="var(--theme-colors-alt-background)" mt={4} p={4}>
      <Text variant="heading5" color="var(--theme-colors-alt-text, #ffffff)">
        -- {author}
      </Text>
    </Box>
  </Box>
);
