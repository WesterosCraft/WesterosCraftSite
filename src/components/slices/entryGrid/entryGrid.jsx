import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import { configProps } from '../../../utility/helpers'
import { EntryCard } from '../../atoms/entryCard'

export const EntryGrid = ({ data }) => (
  <Box className="entry-grid" {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
    <Heading variant="heading3">{data.heading}</Heading>
    <Flex className="entry-card-list" flexDirection={['column', null, 'row']} flexWrap="wrap" mt={5}>
      {data.entryList.map((entry) => (
        <EntryCard data={entry} key={entry.slug} />
      ))}
    </Flex>
  </Box>
)
