import React from 'react';

import { WikiLayout } from '../components/templates/wikiLayout';
import { WikiSliceZone } from '../components/slices/wikiSliceZone';
import SEO from '../components/organisms/seo/seo';
import { useRouter } from 'next/router';
import { computeBreadcrumbs } from '../utils/helpers';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import Error from 'next/error';

const query = `*[_type == "wiki"]`;

const WikiPage = ({ preview, wikiData }) => {
  const data = wikiData[0];
  const router = useRouter();

  if (!router.isFallback && !wikiData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SEO
        title="Wiki"
        description={data.pageDescription}
        image={data.pageEntry && data.pageImage[0].url}
      />
      <WikiLayout
        // navData={navdata}
        title={data.title || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <WikiSliceZone slices={data.wikiSlices} />
      </WikiLayout>
    </>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const wikiData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      wikiData
    }
  };
}

export default WikiPage;
