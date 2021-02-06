import React from 'react';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import { getClient } from '../utils/sanity';
import { useRouter } from 'next/router';
import Error from 'next/error';

const query = `*[_type == "playground"]`;

const PlaygroundPage = ({ playgroundData }) => {
  const data = playgroundData[0];
  const router = useRouter();

  if (!router.isFallback && !playgroundData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SliceZone slices={data.pageBuilder} />
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
