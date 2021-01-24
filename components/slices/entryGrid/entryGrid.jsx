import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import { configProps } from '../../../utils/helpers';
import { EntryCard } from '../../atoms/entryCard';
import Link from 'next/link';

export const EntryGrid = ({ data }) => (
  <Box
    className="entry-grid"
    {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
    <Heading variant="heading3">{data.heading}</Heading>
    <Flex
      className="entry-card-list"
      flexDirection={['column', null, 'row']}
      flexWrap="wrap"
      mt={[0, null, 5]}>
      {data.entryList &&
        data.entryList.map((entry) => (
          <Link href={`/wiki/${entry.parent.slug}/${entry.slug}`} key={entry.slug} passHref>
            <EntryCard data={entry} key={entry.slug} />
          </Link>
        ))}
    </Flex>
  </Box>
);
