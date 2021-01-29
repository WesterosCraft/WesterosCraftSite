import React from 'react';
import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';
import Error from 'next/error';

const query = `*[_type == "launcher"]`;

const LauncherPage = ({ preview, launcherData }) => {
  const data = launcherData[0];
  const router = useRouter();

  if (!router.isFallback && !launcherData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SEO
        title={data.pageTitle || data.title}
        description={data.pageDescription}
        image={data.pageEntry && data.pageImage[0].url}
      />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.heading}
      </Heading>
      <SliceZone slices={data.pageBuilder} />
    </>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const launcherData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      launcherData
    }
  };
}

export default LauncherPage;
