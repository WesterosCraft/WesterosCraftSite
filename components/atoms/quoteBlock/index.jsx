import React from 'react';
import { Flex, Box, Text, Image } from 'rebass';

export const QuoteBlock = ({ content = '', author = '', darkMode }) => (
  <Box width={['80%', null, '75%', 800]} mx="auto" my={150} bg="red">
    <Flex
      as="blockquote"
      p={[5, null, 10]}
      bg="var(--theme-colors-background)"
      sx={{
        position: 'relative',
        boxShadow:
          'inset 0 0 0 4px var(--theme-colors-text, #333333), inset -4px -4px 0 6px var(--theme-colors-gray-400, #cccccc)'
      }}>
      <Text color="red">
        <Image
          src={darkMode ? '/close-quote-alt.svg' : '/close-quote.svg'}
          sx={{
            position: 'absolute',
            width: [56, null, 76],
            height: 56,
            bottom: -30,
            right: -30
          }}
        />
        <Image
          src={darkMode ? '/close-quote-alt.svg' : '/close-quote.svg'}
          sx={{
            position: 'absolute',
            width: [56, null, 76],
            height: 56,
            top: -30,
            left: -30,
            transform: 'rotate(180deg)'
          }}
        />
      </Text>
      <Text
        lineHeight={2}
        variant="heading3"
        fontStyle="italic"
        fontWeight="normal"
        color="var(--theme-colors-text, #ffffff)">
        {content}
      </Text>
    </Flex>
    <Box
      width="fit-content"
      sx={{
        boxShadow:
          'inset 0 0 0 2px var(--theme-colors-text, #333333), inset -2px -2px 0 3px var(--theme-colors-gray-400, #cccccc)'
      }}
      bg="var(--theme-colors-background)"
      mt={4}
      p={4}>
      <Text variant="heading5" color="var(--theme-colors-text, #ffffff)">
        -- {author}
      </Text>
    </Box>
  </Box>
);
