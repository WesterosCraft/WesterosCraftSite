import React from 'react';
import { Text, Flex, Box } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/templates/layout/layout';
import wikiHomeQuery from '../queries/wikiHome.graphql';
import Loader from '../components/atoms/loader/loader';

const WikiPage = () => {
  const { loading, error, data } = useQuery(wikiHomeQuery, {
    variables: {
      section: 'wikiPage',
    },
  });

  if (error) return null;
  if (loading) return <Loader />;

  const page = data.entries[0];

  return (
    <Layout>
      <Flex>
        <Flex mt={140} flexDirection="column" justifyContent="center" width={1} textAlign="center">
          <Text variant="heading1">{page.heading}</Text>
          <Text>{page.subheading}</Text>
        </Flex>
      </Flex>{' '}
    </Layout>
  );
};

export default WikiPage;
