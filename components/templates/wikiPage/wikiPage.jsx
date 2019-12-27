import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import Redactor from '../../atoms/redactor/redactor';

const WikiPage = ({ data }) => {
  console.log('wikie page data: ', data);
  return (
    <Box>
      <Box className="wiki-container" pt={160} bg="white">
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
                <Flex
                  flexDirection="column"
                  bg="#F9F9F9"
                  width="42%"
                  p={4}
                  sx={{
                    float: 'right',
                    clear: 'right',
                    borderRadius: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
                  }}
                >
                  <Text variant="paragraph" color="brandRed" fontWeight={600}>
                    Destination Warp
                  </Text>
                  <Text variant="paragraph" mt={3}>
                    /warp kingslanding
                  </Text>
                </Flex>
                <Text variant="heading2" mr={[0, 0, 0, 0, '50%']}>
                  {data.title}
                </Text>
                <Text variant="paragraph" mt={4} mr={[0, 0, 0, 0, '50%']}>
                  {data.synopsis}
                </Text>
                <Box mr="45%">
                  <Image src={data.images[0].url} mt={8} mr={[0, 0, 0, 0, '100%']} mb={13} />
                </Box>
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
