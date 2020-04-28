import React, { useState } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Text } from 'rebass';
import { Document, Page } from 'react-pdf';

const RookeryPage = ({ data }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(document) {
    setNumPages(document.numPages);
  }

  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.craft.entry.heading}
      </Heading>
      <Heading>{data.craft.entry.subheading}</Heading>
      <Flex flexDirection="column">
        <Box>
          <Document file={data.craft.entry.rookeryList[0].rookeryFile[0].url} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Box>
        {data.craft.entry.rookeryList.map((item) => (
          <Box>
            <Text>{item.rookeryTitle}</Text>
            <Text>{item.rookeryFile[0].url}</Text>
          </Box>
        ))}
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
