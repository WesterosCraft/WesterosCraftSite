import React from 'react';
import { Text, Box, Flex } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import SliceZone from '../components/slices/sliceZone';
import HomePageTemplate from '../components/templates/homepage/homePageTemplate';
import homeQuery from '../queries/home.graphql';
import Layout from '../components/templates/layout/layout';

const HomePage = () => {
  const { loading, error, data } = useQuery(homeQuery);

  if (loading) return <h1> Loading... </h1>;
  if (error) {
    console.log('error: ', error);
  }

  const page = data.entries[0];

  // console.log('home page: ', page);

  return (
    page && (
      <Layout>
        <HomePageTemplate background={page.backgroundImage[0].url}>
          <Flex flexDirection="column" width={1} mx="auto" textAlign="center">
            <Text fontSize={[60]} maxWidth={540} mx="auto" fontWeight="bold">
              {' '}
              {page.heading}{' '}
            </Text>{' '}
            <Text variant="paragraph" mt={6} fontWeight="bold">
              {' '}
              {page.subheading}{' '}
            </Text>{' '}
          </Flex>{' '}
        </HomePageTemplate>{' '}
        <SliceZone slices={page.slices} />{' '}
      </Layout>
    )
  );
};

export default HomePage;
