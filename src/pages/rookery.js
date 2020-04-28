import React, { useState } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Text, Button } from 'rebass';
import { Select, Input } from '@rebass/forms';

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
      <Heading variant="heading4" textAlign="center" maxWidth={786} mx="auto">
        {data.craft.entry.subheading}
      </Heading>
      <Flex flexDirection="column" width={1} justifyContent="center" alignItems="center" mt={[10]}>
        <Box className="pdf-container">
          <Document
            file={`https://cors-anywhere.herokuapp.com/${data.craft.entry.rookeryList[0].rookeryFile[0].url}`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          {/* <p>
            Page {pageNumber} of {numPages}
          </p> */}
          <Flex flexDirection="row" justifyContent="center" p={4} alignItems="center">
            <Button
              onClick={() => {
                if (pageNumber <= 1) {
                  return;
                }
                setPageNumber(pageNumber - 1);
              }}
              disabled={pageNumber <= 1}
              sx={{ cursor: 'pointer' }}
              bg="red.medium"
            >
              Back
            </Button>
            <Text fontSize={[3]} px={4}>
              Page
            </Text>
            <Input readonly maxWidth={55} type="number" value={pageNumber || 1} p="8px" />
            <Text fontSize={[3]} px={4}>
              of {numPages}
            </Text>
            <Button
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
              disabled={pageNumber === numPages}
              sx={{ cursor: 'pointer' }}
              bg="red.medium"
            >
              Next
            </Button>
          </Flex>
        </Box>
        <Flex mt={14}>
          {data.craft.entry.rookeryList.map((item) => (
            <Box>
              <Text>{item.rookeryTitle}</Text>
              <Text>{item.rookeryFile[0].url}</Text>
            </Box>
          ))}
        </Flex>
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
