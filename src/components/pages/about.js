import React from 'react';
import { Text, Flex, Box } from 'rebass';
import Layout from '../components/templates/layout/layout';
import Timeline from '../components/organisms/timeline/timeline';

const AboutPage = () => {
  return (
    <Layout>
      <Flex width={1} py={120} justifyContent="center">
        <Text variant="heading2" textAlign="center">
          About WesterosCraft
        </Text>
      </Flex>
      <Flex flexDirection="column" width={1} bg="gray4">
        <Timeline />
      </Flex>
    </Layout>
  );
};

export default AboutPage;
