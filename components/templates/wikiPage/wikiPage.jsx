import React from 'react';
import { Box, Text, Flex } from 'rebass';

const WikiPage = ({ data }) => {
  console.log('wikie page data: ', data);
  return (
    <Box mt={160}>
      <Box className="wiki-container">
        <Flex className="wiki-main">
          <Flex as="aside" className="wiki-nav" />
          <Box className="wiki-content-container">
            <Box className="wiki-content">
              <Box className="content-wrapper" />
              <Box className="content-sidebar" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WikiPage;
