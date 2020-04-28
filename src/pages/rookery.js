import React from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Text } from 'rebass';
import { Document, Page } from 'react-pdf';

const RookeryPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.craft.entry.heading}
      </Heading>
      <Heading textAlign="center">{data.craft.entry.subheading}</Heading>
      <Flex>
        <Document file="https://westeroscraft.com/web/assets/files/Rookery-Autumn-2019.pdf">
          <Page pageNumber={1} />
        </Document>
        <Box my={86}>
          {data.craft.entry.rookeryList.map((item) => (
            <>
              <Text>{item.rookeryTitle}</Text>
              <Text>{item.rookeryFile[0].url}</Text>
            </>
          ))}
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
              rookeryFile {
                url
              }
              rookeryTitle
            }
          }
        }
      }
    }
  }
`;

export default RookeryPage;
