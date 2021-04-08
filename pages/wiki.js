import React from 'react';

import { WikiLayout } from '../components/templates/wikiLayout';
import { SliceZone } from '../components/slices/sliceZone';
import SEO from '../components/organisms/seo/seo';
import { useRouter } from 'next/router';
import { computeBreadcrumbs } from '../utils/helpers';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import Error from 'next/error';

const query = `*[_type == "wiki"]{
  ...,pageBuilder[]{_type,documents[]->{...},...}
  }`;

const WikiPage = ({ preview, wikiData }) => {
  const router = useRouter();

  const { data } = usePreviewSubscription(query, {
    initialData: wikiData,
    enabled: preview
  });

  const { pageEntry, pageBuilder, pageImage, title, pageDescription } = data[0];

  if (!router.isFallback && !wikiData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SEO title="Wiki" description={pageDescription} image={pageEntry && pageImage[0].url} />
      <WikiLayout
        title={title || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <SliceZone slices={pageBuilder} />
      </WikiLayout>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const wikiData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      wikiData
    },
    revalidate: 1
  };
}

export default WikiPage;
