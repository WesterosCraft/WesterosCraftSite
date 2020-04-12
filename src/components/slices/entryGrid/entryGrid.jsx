import React from 'react'
import { Box, Flex, Heading } from 'rebass'
import { configProps } from '../../../utility/helpers'
import { EntryCard } from '../../atoms/entryCard'
import { regionSlugFormatter } from '../../../utility/regionSlugFormatter'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const EntryGrid = ({ data }) => (
  <Box className="entry-grid" {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
    <Heading variant="heading3">{data.heading}</Heading>
    <Flex className="entry-card-list" flexDirection={['column', null, 'row']} flexWrap="wrap" mt={[0, null, 5]}>
      {data.entryList.map((entry) => (
        <AniLink to={`/wiki/${regionSlugFormatter(entry.projectDetails[0].region)}/${entry.slug}`} key={entry.slug}>
          <EntryCard data={entry} key={entry.slug} />
        </AniLink>
      ))}
    </Flex>
  </Box>
)
