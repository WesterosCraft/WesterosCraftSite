import React from 'react';
import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';
import { LAUNCHER_QUERY } from '../queries/launcherQuery.gql';
import { initializeApollo } from '../../lib/apolloClient';

const LauncherPage = ({ initialApolloState }) => {
  const data =
    initialApolloState.ROOT_QUERY['entry({"section":"launcher","site":"westeroscraft"})'];

  return (
    <>
      <SEO
        title={data.pageTitle || data.title}
        description={data.pageDescription}
        image={data.pageEntry && data.pageImage[0].url}
      />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.heading}
      </Heading>
      <SliceZone slices={data.pageSlices} />
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LAUNCHER_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}

export default LauncherPage;
