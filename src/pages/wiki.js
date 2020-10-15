import React from 'react';

import { WikiLayout } from '../components/templates/wikiLayout';
import { WikiSliceZone } from '../components/slices/wikiSliceZone';
import SEO from '../components/organisms/seo/seo';
import { useRouter } from 'next/router';

import { WIKI_QUERY } from '../queries/wikiQuery.gql';
import { initializeApollo } from '../../lib/apolloClient';
import { useQuery } from '@apollo/client';

const WikiPage = () => {
  const { data } = useQuery(WIKI_QUERY);
  const router = useRouter();

  return (
    <>
      <SEO
        title="Wiki"
        description={data.entry.pageDescription}
        image={data.entry.pageEntry && data.entry.pageImage[0].url}
      />
      <WikiLayout title={data.entry.title || 'WesterosCraft Wiki'} breadcrumb={router.asPath}>
        <WikiSliceZone slices={data.entry.wikiSlices} />
      </WikiLayout>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: WIKI_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}

export default WikiPage;
