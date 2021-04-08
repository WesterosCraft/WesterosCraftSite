import React from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { SliceZone } from '../../../components/slices/sliceZone';
import SEO from '../../../components/organisms/seo/seo';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';
import { computeBreadcrumbs } from '../../../utils/helpers';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';
import Error from 'next/error';

const query = `*[_type == "guide" && slug.current == $slug][0]{
  ...,pageBuilder[]{_type,documents[]->{...},...}
  }`;

const GuidePage = ({ preview, guideData }) => {
  const router = useRouter();

  const { data } = usePreviewSubscription(query, {
    initialData: guideData,
    enabled: preview
  });

  const { pageDescription, pageEntry, pageImage, pageBuilder, name } = data;

  if (!router.isFallback && !guideData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {!guideData ? (
        <Spinner />
      ) : (
        <SEO title={name} description={pageDescription} image={pageEntry && pageImage[0].url} />
      )}
      <WikiLayout
        title={(guideData && name) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {guideData && pageBuilder && <SliceZone slices={pageBuilder} />}
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  const routes = await getClient().fetch(`*[_type == "guide" && defined(slug.current)]{
    "params": {"guide": slug.current}
  }`);

  return {
    paths: routes || null,
    fallback: true
  };
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { guide } = params;

  const guideData = await getClient(preview).fetch(query, {
    slug: guide
  });

  return {
    props: { preview, guideData },
    revalidate: 1
  };
}

export default GuidePage;
