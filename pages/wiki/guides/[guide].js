import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import destinationQuery from '../../../queries/destination.graphql';
import Loader from '../../../components/atoms/loader/loader';
import Layout from '../../../components/templates/layout/layout';
import WikiPage from '../../../components/templates/wikiPage/wikiPage';

const Guide = ({ destination }) => {
  // const { loading, error, data } = useQuery(destinationQuery, {
  //   variables: {
  //     destination,
  //   },
  // });

  // if (error) {
  //   console.log(error);
  // }

  // if (loading) return <Loader />;

  // const pageData = data.entries[0];

  return (
    <Layout>
      <WikiPage>
        <h1>guide</h1>
      </WikiPage>
    </Layout>
  );
};

Guide.getInitialProps = async ({ query }) => {
  return query;
};

export default Guide;
