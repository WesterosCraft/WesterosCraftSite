import React from 'react'
import { Box, Flex, Text } from 'rebass'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const EntryCard = ({ data }) => (
  <AniLink to={`/wiki/${data.slug}`}>
    <Box
      height={252}
      width={[1, null, 240]}
      mr={5}
      sx={{
        cursor: 'pointer',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        '&:hover': {
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        },
      }}
    >
      {console.log('entry card', data)}
      <Flex flexDirection="column">
        <Text>{data.title || ''}</Text>
      </Flex>
    </Box>
  </AniLink>
)
