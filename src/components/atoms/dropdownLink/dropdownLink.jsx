import React from 'react';
import { Box, Text } from 'rebass';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const DropdownLink = ({ data, onClick }) => (
  <>
    {data.element && data.element.slug ? (
      <AniLink cover duration={0.5} bg="#9E1E22" direction="right" to={`/${data.element && data.element.uri}`}>
        <Box
          py={3}
          px={3}
          as="li"
          onClick={onClick}
          sx={{
            zIndex: 5,
            cursor: 'pointer',
            listStyleType: 'none',
            color: 'gray.100',
            '&:hover': {
              color: 'red.medium',
              backgroundColor: 'rgba(120, 120, 120, 0.1)',
            },
            '&:active, &:visited': {
              color: '#333333',
            },
          }}
        >
          <Text as="span" fontSize={1} width={1} fontWeight="bold">
            {data.title}
          </Text>
        </Box>
      </AniLink>
    ) : (
      <Box
        href={data.url}
        py={3}
        px={3}
        as="a"
        color="gray.100"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            color: 'red.medium',
            backgroundColor: 'rgba(120, 120, 120, 0.1)',
          },
        }}
      >
        <Text as="span" fontSize={1} width={1} fontWeight="bold">
          {data.title}
        </Text>
      </Box>
    )}
  </>
);
