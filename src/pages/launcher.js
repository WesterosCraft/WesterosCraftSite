import React from 'react';

import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';

import { LAUNCHER_QUERY } from '../queries/launcherQuery.gql';
import { initializeApollo } from '../../lib/apolloClient';
import { useQuery } from '@apollo/client';

const LauncherPage = () => {
  const { data } = useQuery(LAUNCHER_QUERY);
  return (
    <>
      <SEO
        title={data.entry.pageTitle || data.entry.title}
        description={data.entry.pageDescription}
        image={data.entry.pageEntry && data.entry.pageImage[0].url}
      />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.entry.heading}
      </Heading>
      <SliceZone slices={data.entry.pageSlices} />
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
