import React from 'react';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import { getClient } from '../utils/sanity';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { VideoList } from '../components/videoList';

const query = `*[_type == "playground"]`;

//https:tailwindcomponents.com/component/responsive-navbar-with-dropdown/landing
const PlaygroundPage = ({ playgroundData }) => {
  const data = playgroundData[0];
  const router = useRouter();

  if (!router.isFallback && !playgroundData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SliceZone slices={data.pageBuilder} />
      <VideoList />
    </>
  );
};

export async function getStaticProps({ params = {}, preview = false }) {
  const playgroundData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      playgroundData
    },
    revalidate: 1
  };
}

export default PlaygroundPage;
