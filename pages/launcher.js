import React from 'react';
import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';
import Error from 'next/error';

const query = `*[_type == "launcher"]`;

const LauncherPage = ({ preview, launcherData }) => {
  const router = useRouter();

  const { data } = usePreviewSubscription(query, {
    initialData: launcherData,
    enabled: preview
  });

  if (!router.isFallback && !launcherData) {
    return <Error statusCode={404} />;
  }

  const { heading, pageBuilder, pageTitle, pageEntry, pageImage, title, pageDescription } = data[0];

  return (
    <>
      <SEO
        title={pageTitle || title}
        description={pageDescription}
        image={pageEntry && pageImage[0].url}
      />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {heading}
      </Heading>
      <SliceZone slices={pageBuilder} />
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const launcherData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      launcherData
    },
    revalidate: 1
  };
}

export default LauncherPage;
