import React from 'react';
import { Box, Flex } from 'rebass';
import WikiSidebar from '../../organisms/wikiSidebar/wikiSidebar';
import MobileWikiSidebar from '../../organisms/wikiSidebar/mobileWikiSidebar';

const WikiPage = ({ children }) => {
  return (
    <Box>
      <Box className="wiki-container" bg="#fbfbfc">
        <Flex className="wiki-main" pt={[68, null, 160]} flexDirection={['column', null, 'row']}>
          <MobileWikiSidebar />
          <WikiSidebar />
          <Box
            className="wiki-content-container"
            width="100%"
            sx={{
              border: '1px solid rgb(240, 240, 240)',
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
            }}
          >
            <Box className="wiki-content" p={[5, null, 10]} bg="white" height="100%">
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
