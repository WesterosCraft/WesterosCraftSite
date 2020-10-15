import React from 'react';
import { Flex } from 'rebass';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { WikiSliceZone } from '../../../components/slices/wikiSliceZone';
import SEO from '../../../components/organisms/seo/seo';
import { initializeApollo } from '../../../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import { MISC_QUERY, ALL_MISC_QUERY } from '../../../queries/miscQuery.gql';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';
import { computeBreadcrumbs } from '../../../utility/helpers';

const MiscellaneousPage = ({ slug }) => {
  const { data, loading } = useQuery(MISC_QUERY, { variables: { slug: slug } });
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
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <WikiSliceZone slices={data && data.entry && data.entry.wikiSlices} />
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

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MISC_QUERY
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
