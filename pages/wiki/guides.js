import React from 'react';
import { Flex, Text } from 'rebass';
import Layout from '../../components/templates/layout/layout';
import WikiPage from '../../components/templates/wikiPage/wikiPage';

const Guides = ({}) => {
  return (
    <Layout>
      <WikiPage>
        <Flex width={1} flexWrap="wrap" flexDirection="column">
          <Text>hi</Text>
        </Flex>
      </WikiPage>
    </Layout>
  );
};

export default Guides;
