import React from 'react';
import { Box, Text, Flex } from 'rebass';
import SEO from '../components/organisms/seo/seo';
import { Heading } from 'rebass';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';

import Error from 'next/error';

const query = `*[_type == "downloads"]`;

const DownloadsPage = ({ preview, downloadsData }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: downloadsData,
    enabled: preview
  });
  const router = useRouter();

  const { heading, title, subheading, pageBuilder } = data[0];

  if (!router.isFallback && !downloadsData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SEO title={title} description={'WesterosCraft Downloads'} />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {heading}
      </Heading>
      <SliceZone slices={pageBuilder} />
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const downloadsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      downloadsData
    },
    revalidate: 1
  };
}

export default DownloadsPage;
