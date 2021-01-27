import React from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { WikiSliceZone } from '../../../components/slices/wikiSliceZone';
import SEO from '../../../components/organisms/seo/seo';
import { initializeApollo } from '../../../lib/apolloClient';
import { GUIDE_QUERY, ALL_GUIDES_QUERY } from '../../../queries/guideQuery.gql';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';
import { computeBreadcrumbs } from '../../../utils/helpers';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';
import Error from 'next/error';

const query = `*[_type == "guide" && slug.current == $slug][0]`;

const GuidePage = ({ preview, slug, guideData }) => {
  const router = useRouter();
  const data = guideData[0];

  if (!router.isFallback && !guideData) {
    return <Error statusCode={404} />;
  }

  // const data =
  //   initialApolloState.ROOT_QUERY[
  //     `entry({"site":"westeroscraft","slug":"${slug}","type":"wikiGuide"})`
  //   ];
  // const navData = initialApolloState.ROOT_QUERY['nodes({"level":1,"navHandle":"wikiNav"})'];

  return (
    <>
      {!guideData ? (
        <Spinner />
      ) : (
        <SEO
          title={data.pageTitle || data.title}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <WikiLayout
        // navData={navData}
        title={(data && data.title) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <WikiSliceZone slices={data.wikiSlices} />
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  const routes = await getClient().fetch(`*[_type == "destination" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`);

  return {
    paths: routes || null,
    fallback: true
  };
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { slug } = params;
  console.log(slug);
  const test = await getClient(preview).fetch(query, {
    slug
  });

  return {
    props: { preview, test, slug }
  };
}

export default GuidePage;
