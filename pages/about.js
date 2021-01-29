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
  const data = aboutData[0];
  const router = useRouter();

  if (!router.isFallback && !aboutData) {
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
      <Spacer data={{ mobile: 72 }} />
      <VideoEmbed
        maxWidth={756}
        thumbnail={data.video.thumbnail.asset._ref}
        embedUrl={data.video.url}
      />
      <SliceZone slices={data.pageBuilder} />
    </>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const aboutData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      aboutData
    }
  };
}

export default AboutPage;
