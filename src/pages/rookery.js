import React, { useState } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Text } from 'rebass';
import Iframe from 'react-iframe';

import { Spinner } from '../components/atoms/spinner';

const RookeryPage = ({ data }) => {
  console.log(data);

  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]} px={5}>
        {data.craft.entry.heading}
      </Heading>
      <Heading variant="heading4" textAlign="center" maxWidth={786} mx="auto" px={5}>
        {data.craft.entry.subheading}
      </Heading>
      <Flex>
        <Box width={1} maxWidth={1120} height={792} my={10} mx="auto">
          <Iframe
            url={data.craft.entry.rookeryList[0].rookeryUrl}
            width="100%"
            maxWidth="100%"
            height="100%"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </Box>
      </Flex>
    </>
  );
};
export const pageQuery = graphql`
  query rookeryQuery {
    craft {
      entry(site: "westeroscraft", section: "rookery") {
        ... on Craft_rookery_rookery_Entry {
          heading
          subheading
          rookeryList {
            ... on Craft_rookeryList_rookery_BlockType {
              rookeryUrl
              rookeryTitle
            }
          }
        }
      }
    }
  }
`;

export default RookeryPage;
