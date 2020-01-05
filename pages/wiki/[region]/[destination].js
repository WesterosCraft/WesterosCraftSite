import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Box, Text, Flex, Button } from 'rebass';
import Popup from 'reactjs-popup';
import destinationQuery from '../../../queries/destination.graphql';
import Loader from '../../../components/atoms/loader/loader';
import Layout from '../../../components/templates/layout/layout';
import WikiPage from '../../../components/templates/wikiPage/wikiPage';
import Redactor from '../../../components/atoms/redactor/redactor';
import { statusLabel, regionLabel, projectTypeLabel } from '../../../utility/helpers';
import ImageSlider from '../../../components/molecules/imageSlider/imageSlider';

const Destination = ({ destination }) => {
  const { loading, error, data } = useQuery(destinationQuery, {
    variables: {
      destination,
    },
  });

  if (error) {
    console.log(error);
  }

  if (loading) return <Loader />;

  const pageData = data.entries[0];

  return (
    <Layout>
      <WikiPage>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text variant="heading2" mr={[0, 0, 0, 0, '50%']}>
            {pageData.title}
          </Text>
          <Popup trigger={<Button variant="utility">Edit page</Button>} modal>
            <Text>hello</Text>
          </Popup>
        </Flex>
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
            border: '1px solid rgb(240, 240, 240)',
          }}
        >
          <Text variant="paragraph" color="brandRed" fontWeight={600}>
            Destination Warp
          </Text>
          <Text variant="paragraph" mt={3}>
            {pageData.warp || 'N/A'}
          </Text>
        </Flex>
        <Text variant="paragraph" mt={4} mr={[0, 0, 0, 0, '50%']}>
          {pageData.synopsis}
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
            border: '1px solid rgb(240, 240, 240)',
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
                {regionLabel(pageData.region) || 'N/A'}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                Project type
              </Text>
              <Text mt={1} fontSize={2}>
                {projectTypeLabel(pageData.locationType) || 'N/A'}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                Status
              </Text>
              <Text mt={1} fontSize={2}>
                {statusLabel(pageData.locationStatus) || 'N/A'}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                House
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.house || 'N/A'}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} width={150} fontWeight="600" pr={8} fontSize={2}>
                Date started
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.dateStarted || 'N/A'}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                Date completed
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.dateCompleted || 'N/A'}
              </Text>
            </Flex>
          </Flex>
          <Box />
        </Flex>
        <Box mr={[0, 0, 0, 0, '45%']} mt={8} mb={13}>
          <ImageSlider images={pageData.images} />
        </Box>
        <Redactor dangerouslySetInnerHTML={{ __html: pageData.copy }} />
      </WikiPage>
    </Layout>
  );
};

Destination.getInitialProps = async ({ query }) => {
  return query;
};

export default Destination;
