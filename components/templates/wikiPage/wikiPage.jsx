import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import Redactor from '../../atoms/redactor/redactor';
import { statusLabel, regionLabel } from '../../../utility/helpers';
import WikiSidebar from '../../organisms/wikiSidebar/wikiSidebar';

const WikiPage = ({ data }) => {
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
            <Box className="wiki-content" p={10} bg="white">
              <Box className="content-wrapper">
                <Text variant="heading2" mr={[0, 0, 0, 0, '50%']}>
                  {data.title}
                </Text>
                <Flex
                  flexDirection="column"
                  bg="#F9F9F9"
                  width={['100%', '100%', '100%', '100%', '42%']}
                  p={4}
                  mt={6}
                  sx={{
                    float: ['none', 'none', 'none', 'none', 'right'],
                    clear: 'right',
                    borderRadius: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
                  }}
                >
                  <Text variant="paragraph" color="brandRed" fontWeight={600}>
                    Destination Warp
                  </Text>
                  <Text variant="paragraph" mt={3}>
                    {data.warp}
                  </Text>
                </Flex>
                <Text variant="paragraph" mt={4} mr={[0, 0, 0, 0, '50%']}>
                  {data.synopsis}
                </Text>
                <Flex
                  flexDirection="column"
                  bg="#F9F9F9"
                  width={['100%', '100%', '100%', '100%', '42%']}
                  p={4}
                  mt={6}
                  sx={{
                    float: ['none', 'none', 'none', 'none', 'right'],
                    clear: 'right',
                    borderRadius: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px',
                  }}
                >
                  <Text variant="paragraph" color="brandRed" fontWeight={600}>
                    Project Details
                  </Text>
                  <Flex width={1} flexDirection="column">
                    <Flex flexDirection="row" py={1}>
                      <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                        Region
                      </Text>
                      <Text mt={1} fontSize={2}>
                        {regionLabel(data.region) || 'N/A'}
                      </Text>
                    </Flex>
                    <Flex flexDirection="row" py={1}>
                      <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                        Project type
                      </Text>
                      <Text mt={1} fontSize={2}>
                        {data.locationType || 'N/A'}
                      </Text>
                    </Flex>
                    <Flex flexDirection="row" py={1}>
                      <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                        Status
                      </Text>
                      <Text mt={1} fontSize={2}>
                        {statusLabel(data.locationStatus) || 'N/A'}
                      </Text>
                    </Flex>
                    <Flex flexDirection="row" py={1}>
                      <Text mt={1} width={150} fontWeight="600" pr={8} fontSize={2}>
                        Date started
                      </Text>
                      <Text mt={1} fontSize={2}>
                        {data.dateStarted || 'N/A'}
                      </Text>
                    </Flex>
                    <Flex flexDirection="row" py={1}>
                      <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                        Date completed
                      </Text>
                      <Text mt={1} fontSize={2}>
                        {data.dateCompleted || 'N/A'}
                      </Text>
                    </Flex>
                  </Flex>
                  <Box />
                </Flex>
                <Box mr={[0, 0, 0, 0, '45%']}>
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
