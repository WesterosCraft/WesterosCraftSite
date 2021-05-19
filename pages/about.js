import React from 'react';
import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { VideoEmbed } from '../components/organisms/videoEmbed';
import { Spacer } from '../components/slices/spacer';

const query = `*[_type == "about"]`;

const AboutPage = ({ preview, aboutData }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: aboutData,
    enabled: preview
  });
  const router = useRouter();

  const {
    heading,
    pageBuilder,
    pageTitle,
    pageEntry,
    pageImage,
    title,
    pageDescription,
    video
  } = data[0];

  if (!router.isFallback && !aboutData) {
    return <Error statusCode={404} />;
  }
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
      <Spacer data={{ mobile: 72 }} />
      <VideoEmbed maxWidth={756} thumbnail={video.thumbnail.asset._ref} embedUrl={video.url} />
      <SliceZone slices={pageBuilder} />
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const aboutData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      aboutData
    },
    revalidate: 1
  };
}

export default AboutPage;
