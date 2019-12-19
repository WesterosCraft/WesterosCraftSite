import React from 'react';
import { Text, Flex, Box } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import Layout from '../components/templates/layout/layout';
import wikiHomeQuery from '../queries/wikiHome.graphql';
import Loader from '../components/atoms/loader/loader';
import WikiCard from '../components/molecules/wikiCard/wikiCard';

const WikiPage = () => {
  const { loading, error, data } = useQuery(wikiHomeQuery, {
    variables: {
      section: 'wikiPage',
    },
  });

  if (error) return null;
  if (loading) return <Loader />;

  const page = data.entries[0];

  console.log(page);

  return (
    <Layout>
      <Flex flexDirection="column">
        <Flex mt={140} flexDirection="column" justifyContent="center" width={1} textAlign="center">
          <Text variant="heading1">{page.heading}</Text>
          <Text>{page.subheading}</Text>
        </Flex>
        <Flex flexDirection="row" justifyContent="center" flexWrap="wrap" mt={120}>
          {page.wikiCard.map(card => (
            <WikiCard data={card} />
          ))}
        </Flex>
      </Flex>{' '}
    </Layout>
  );
};

export default WikiPage;
