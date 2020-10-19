import React from 'react';

import { WikiLayout } from '../components/templates/wikiLayout';
import { WikiSliceZone } from '../components/slices/wikiSliceZone';
import SEO from '../components/organisms/seo/seo';
import { useRouter } from 'next/router';

import { WIKI_QUERY } from '../queries/wikiQuery.gql';
import { initializeApollo } from '../../lib/apolloClient';
import { computeBreadcrumbs } from '../utility/helpers';

const WikiPage = ({ initialApolloState }) => {
  const data = initialApolloState.ROOT_QUERY['entry({"site":"westeroscraft","slug":"wiki"})'];
  const router = useRouter();

  return (
    <>
      <SEO
        title="Wiki"
        description={data.pageDescription}
        image={data.pageEntry && data.pageImage[0].url}
      />
      <WikiLayout
        title={data.title || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <WikiSliceZone slices={data.wikiSlices} />
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
