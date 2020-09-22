import React from 'react';

import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';
import { useQuery } from '@apollo/client';
import { ABOUT_QUERY } from '../queries/aboutQuery.gql';
import { initializeApollo } from '../../lib/apolloClient';

const AboutPage = () => {
  const { data } = useQuery(ABOUT_QUERY);

  return (
    <>
      <SEO
        title={data.entry.pageTitle || data.entry.title}
        description={data.entry.pageDescription}
        image={data.entry.pageEntry && data.entry.pageImage[0].url}
      />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.entry.heading}
      </Heading>
      <SliceZone slices={data.entry.pageSlices} />
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ABOUT_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}

export default AboutPage;
