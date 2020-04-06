import React from 'react'
import { Box, Text } from 'rebass'
import { Link } from 'gatsby'

export const DropdownLink = ({ data }) => (
  <>
    {data.element && data.element.slug ? (
      <Link to={`/${data.element && data.element.slug && data.element.slug}`}>
        <Box
          py={3}
          px={3}
          as="li"
          sx={{
            cursor: 'pointer',
            listStyleType: 'none',
            color: 'gray.100',
            '&:hover': {
              color: 'red.medium',
              backgroundColor: 'rgba(120, 120, 120, 0.1)',
            },
            '&:active, &:visited': {
              color: 'black',
            },
          }}
        >
          <Text as="span" fontSize={1} width={1} fontWeight="bold">
            {data.title}
          </Text>
        </Box>
      </Link>
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
)
