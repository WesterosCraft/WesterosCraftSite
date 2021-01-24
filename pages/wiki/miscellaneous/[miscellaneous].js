import React from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { WikiSliceZone } from '../../../components/slices/wikiSliceZone';
import SEO from '../../../components/organisms/seo/seo';
import { initializeApollo } from '../../../lib/apolloClient';
import { MISC_QUERY, ALL_MISC_QUERY } from '../../../queries/miscQuery.gql';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';
import { computeBreadcrumbs } from '../../../utils/helpers';

const MiscellaneousPage = ({ initialApolloState, slug }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  const data =
    initialApolloState.ROOT_QUERY[
      `entry({"site":"westeroscraft","slug":"${slug}","type":"wikiMiscellaneous"})`
    ];
  const navData = initialApolloState.ROOT_QUERY['nodes({"level":1,"navHandle":"wikiNav"})'];

  return (
    <>
      {!data ? (
        <Spinner />
      ) : (
        <SEO
          title={data.pageTitle || data.title}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <WikiLayout
        navData={navData}
        title={(data && data.title) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <WikiSliceZone slices={data && data.wikiSlices} />
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const miscs = await apolloClient.query({
    query: ALL_MISC_QUERY
  });

  const paths = miscs.data.entries.map((page) => ({
    params: {
      miscellaneous: page.slug
    }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MISC_QUERY,
    variables: { slug: params.miscellaneous }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug: params.miscellaneous
    },
    revalidate: 1
  };
}

export default MiscellaneousPage;
