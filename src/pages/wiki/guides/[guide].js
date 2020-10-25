import React from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { WikiSliceZone } from '../../../components/slices/wikiSliceZone';
import SEO from '../../../components/organisms/seo/seo';
import { initializeApollo } from '../../../../lib/apolloClient';
import { GUIDE_QUERY, ALL_GUIDES_QUERY } from '../../../queries/guideQuery.gql';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';
import { computeBreadcrumbs } from '../../../utility/helpers';

const GuidePage = ({ slug, initialApolloState }) => {
  const data =
    initialApolloState.ROOT_QUERY[
      `entry({"site":"westeroscraft","slug":"${slug}","type":"wikiGuide"})`
    ];
  const navData = initialApolloState.ROOT_QUERY['nodes({"level":1,"navHandle":"wikiNav"})'];

  const router = useRouter();

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
        <WikiSliceZone slices={data.wikiSlices} />
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const guides = await apolloClient.query({
    query: ALL_GUIDES_QUERY
  });

  const paths = guides.data.entries.map((page) => ({
    params: {
      guide: page.slug
    }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GUIDE_QUERY,
    variables: { slug: params.guide }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug: params.guide
    },
    revalidate: 1
  };
}

export default GuidePage;
