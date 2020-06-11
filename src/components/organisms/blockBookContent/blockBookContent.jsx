import React from 'react';
import { Box, Heading } from 'rebass';
import useSWR from 'swr';
import { request } from 'graphql-request';

export const BlockBookContent = ({ children, title }) => {
  const { data, error } = useSWR(
    `{
      categories(group: "blocks") {
        title
      }
    }
    `,
    (query) => request('https://cdn.westeroscraft.com/api', query),
  );

  console.log('data', data);
  return (
    <Box as="article" ml={[0, null, 13]} className="block-book-content" maxWidth={786} width={1}>
      <Heading variant="heading2" textAlign="center" pb={8}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};
