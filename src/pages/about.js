import React from 'react';
import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';
import { ABOUT_QUERY } from '../queries/aboutQuery.gql';
import { initializeApollo } from '../../lib/apolloClient';

const AboutPage = ({ initialApolloState }) => {
  const data = initialApolloState.ROOT_QUERY['entry({"section":"about","site":"westeroscraft"})'];

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
      <SliceZone slices={data.pageSlices} />
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
