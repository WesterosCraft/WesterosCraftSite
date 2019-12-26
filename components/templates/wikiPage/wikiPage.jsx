import React from 'react';
import { Box, Text, Flex } from 'rebass';

const WikiPage = ({ data }) => {
  console.log('wikie page data: ', data);
  return (
    <Box>
      <Box className="wiki-container" pt={160}>
        <Flex className="wiki-main">
          <Flex as="aside" className="wiki-nav" width={250} pr={5}>
            <Box
              sx={{
                position: 'sticky',
                top: '0.75rem',
                height: 'calc(100vh - 0.75rem)',
                paddingBottom: '2rem',
                overflowY: 'auto',
              }}
            />
          </Flex>
          <Box
            className="wiki-content-container"
            width="auto"
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
            }}
          >
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
