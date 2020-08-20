import React from 'react';
import { Box, Heading } from 'rebass';
// import useSWR from 'swr';
// import { request } from 'graphql-request';

export const BlockBookContent = ({ children, title }) => {
  // const { data, error, loading } = useSWR(
  //   `{idk
  //     categories(group: "blocks") {
  //       title
  // what is happening
  //     }
  //   }
  //   `,
  //   (query) => request('https://cdn.westeroscraft.com/api', query),
  // );

  return (
    <Box as="article" ml={[0, null, 13]} className="block-book-content" maxWidth={786} width={1}>
      <Heading variant="heading2" textAlign="center" pb={8}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};
