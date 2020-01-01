import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Flex, Text } from 'rebass';
import Loader from '../../components/atoms/loader/loader';
import Layout from '../../components/templates/layout/layout';
import WikiPage from '../../components/templates/wikiPage/wikiPage';
import regionQuery from '../../queries/region.graphql';
import RegionEntryCard from '../../components/molecules/regionEntryCard/regionEntryCard';

const Region = ({ region }) => {
  const { loading, error, data } = useQuery(regionQuery, {
    variables: {
      region,
    },
  });

  console.log('REGION DATA: ', data);

  console.log('region:', region);

  if (error) {
    console.log(error);
  }

  if (loading) return <Loader />;

  const pageData = data.entries;

  return (
    <Layout>
      <WikiPage>
        <Flex width={1} flexWrap="wrap" flexDirection="column">
          <Text variant="heading2" ml={3}>
            {' '}
            {region}{' '}
          </Text>
          <Flex width={1} flexWrap="wrap">
            {pageData.map((entry, i) => entry.title && <RegionEntryCard data={entry} key={i} />)}{' '}
          </Flex>
        </Flex>{' '}
      </WikiPage>{' '}
    </Layout>
  );
};

Region.getInitialProps = async ({ query }) => {
  return query;
};

export default Region;
