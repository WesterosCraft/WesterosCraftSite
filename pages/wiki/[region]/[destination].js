import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import destinationQuery from '../../../queries/destination.graphql';
import Loader from '../../../components/atoms/loader/loader';
import Layout from '../../../components/templates/layout/layout';
import WikiPage from '../../../components/templates/wikiPage/wikiPage';

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

  return (
    <Layout>
      <WikiPage data={data.entries[0]} />
    </Layout>
  );
};

Destination.getInitialProps = async ({ query }) => {
  return query;
};

export default Destination;
