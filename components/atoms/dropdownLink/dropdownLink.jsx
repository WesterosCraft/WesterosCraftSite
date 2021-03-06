import React from 'react';
import { Box, Text } from 'rebass';
import Link from 'next/link';

export const DropdownLink = ({ data, onClick }) => (
  <>
    {data.element && data.element.slug ? (
      <Link href={`/${data.element && data.element.uri}`}>
        <Box
          className="dropdown-link"
          py={3}
          px={3}
          as="li"
          onClick={onClick}
          sx={{
            minWidth: 200,
            textAlign: 'center',
            zIndex: 5,
            cursor: 'pointer',
            listStyleType: 'none',
            color: 'gray.100',
            '&:hover': {
              color: 'red.medium',
              backgroundColor: 'rgba(120, 120, 120, 0.1)'
            },
            '&:active, &:visited': {
              color: '#333333'
            },
            '&:focus': { outline: 0 }
          }}>
          <Text as="span" fontSize={1} width={1} fontWeight="bold">
            {data.title}
          </Text>
        </Box>
      </Link>
    ) : (
      <Box
        className="dropdown-link"
        href={data.url}
        py={3}
        px={3}
        as="a"
        color="gray.100"
        sx={{
          minWidth: 200,
          cursor: 'pointer',
          textAlign: 'center',
          '&:hover': {
            color: 'red.medium',
            backgroundColor: 'rgba(120, 120, 120, 0.1)'
          },
          '&:focus': { outline: 0 }
        }}>
        <Text as="span" fontSize={1} width={1} fontWeight="bold">
          {data.title}
        </Text>
      </Box>
    )}
  </>
);
