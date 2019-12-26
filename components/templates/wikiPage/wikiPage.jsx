import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import Redactor from '../../atoms/redactor/redactor';

const WikiPage = ({ data }) => {
  console.log('wikie page data: ', data);
  return (
    <Box>
      <Box className="wiki-container" pt={160}>
        <Flex className="wiki-main">
          <Flex as="aside" className="wiki-nav" width={[250, 300]} pr={5}>
            <Box
              sx={{
                position: 'sticky',
                top: '0.75rem',
                height: 'calc(100vh - 0.75rem)',
                paddingBottom: '2rem',
                overflowY: 'auto',
              }}
            >
              <Text>test content</Text>
            </Box>
          </Flex>
          <Box
            className="wiki-content-container"
            width="100%"
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
            }}
          >
            <Box className="wiki-content" p={10}>
              <Box className="content-wrapper">
                <Text variant="heading2" mr="50%">
                  {data.title}
                </Text>
                <Text variant="paragraph" mt={4} mr="50%">
                  {data.synopsis}
                </Text>
                <Image src={data.images[0].url} mt={8} mr="50%" />
                <Redactor dangerouslySetInnerHTML={{ __html: data.copy }} />
              </Box>
              <Box className="content-sidebar" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WikiPage;
