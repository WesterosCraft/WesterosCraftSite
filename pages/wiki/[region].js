import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from '../../components/atoms/loader/loader';
import Layout from '../../components/templates/layout/layout';
import WikiPage from '../../components/templates/wikiPage/wikiPage';
import regionQuery from '../../queries/region.graphql';

const Region = ({ region }) => {
  const { loading, error, data } = useQuery(regionQuery, {
    variables: {
      region,
    },
  });

  console.log('REGION DATA: ', data);

  if (error) {
    console.log(error);
  }

  if (loading) return <Loader />;

  return (
    <Layout>
      <h1>hi</h1>{' '}
    </Layout>
  );
};

Region.getInitialProps = async ({ query }) => {
  return query;
};

export default Region;
