import React from 'react';
import { Flex } from 'rebass';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { WikiSliceZone } from '../../../components/slices/wikiSliceZone';
import SEO from '../../../components/organisms/seo/seo';
import { initializeApollo } from '../../../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import { GUIDE_QUERY, ALL_GUIDES_QUERY } from '../../../queries/guideQuery.gql';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';

const GuidePage = ({ slug }) => {
  const { data, loading } = useQuery(GUIDE_QUERY, { variables: { slug: slug } });
  const router = useRouter();

  if (loading) {
    return (
      <Flex my={15} width={1} justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <>
      {loading || !data || !data.entry ? (
        <Spinner />
      ) : (
        <SEO
          title={data.pageTitle || data.entry.title}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={(data && data.entry.title) || 'WesterosCraft Wiki'}
        breadcrumb={router.asPath}>
        <WikiSliceZone slices={data.entry.wikiSlices} />
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
    query: GUIDE_QUERY
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
