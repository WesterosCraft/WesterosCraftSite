import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'

export const EntryGrid = ({ data }) => (
  <Box>
    {console.log(data)}
    <Heading variant="heading3">{data.heading}</Heading>
    <Flex flexWrap="wrap">
      {data.entryList.map((entry) => (
        <Box>
          <Text>{entry.title}</Text>
        </Box>
      ))}
    </Flex>
  </Box>
)
