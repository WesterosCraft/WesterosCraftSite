import React from 'react';
import { Box, Flex } from 'rebass';
import WikiSidebar from '../../organisms/wikiSidebar/wikiSidebar';

const WikiPage = ({ children }) => {
  return (
    <Box>
      <Box className="wiki-container" pt={160} bg="#fbfbfc">
        <Flex className="wiki-main">
          <WikiSidebar />
          <Box
            className="wiki-content-container"
            width="100%"
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
            }}
          >
            <Box className="wiki-content" p={10} bg="white" height="100%">
              <Box className="content-wrapper">{children}</Box>
              <Box className="content-sidebar" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WikiPage;
