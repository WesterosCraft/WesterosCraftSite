import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Box, Text, Flex, Button } from 'rebass';
import { NextSeo } from 'next-seo';
import destinationQuery from '../../../queries/destination.graphql';
import Loader from '../../../components/atoms/loader/loader';
import Layout from '../../../components/templates/layout/layout';
import WikiPage from '../../../components/templates/wikiPage/wikiPage';
import Redactor from '../../../components/atoms/redactor/redactor';
import { statusLabel, regionLabel, projectTypeLabel, getFormattedDate } from '../../../utility/helpers';
import ImageSlider from '../../../components/molecules/imageSlider/imageSlider';
import EditWikiForm from '../../../components/forms/editWikiForm';
import Modal from '../../../components/atoms/modal/modal';

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
      <NextSeo title={`${pageData.title} | WesterosCraft Wiki`} description={pageData.synopsis || ''} />
      <WikiPage>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text variant="heading2" mr={[0, 0, 0, 0, '50%']}>
            {pageData.title}
          </Text>
          <Modal trigger={<Button variant="utility">Edit page</Button>} lockScroll>
            <EditWikiForm data={pageData} />
          </Modal>
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
            {pageData.warp || ''}
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
                {pageData.region ? regionLabel(pageData.region) : ''}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                Category
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.locationType ? projectTypeLabel(pageData.locationType) : ''}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                Status
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.locationStatus ? statusLabel(pageData.locationStatus) : ''}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                House
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.house || ''}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                Project Lead(s)
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.projectLeads || ''}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} width={150} fontWeight="600" pr={8} fontSize={2}>
                Date started
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.dateStarted !== null ? getFormattedDate(pageData.dateStarted) : ''}
              </Text>
            </Flex>
            <Flex flexDirection="row" py={1}>
              <Text mt={1} fontWeight="600" width={150} pr={8} fontSize={2}>
                Date completed
              </Text>
              <Text mt={1} fontSize={2}>
                {pageData.dateCompleted !== null ? getFormattedDate(pageData.dateCompleted) : ''}
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
