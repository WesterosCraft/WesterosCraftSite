import React from 'react';
import { Text, Flex, Box } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import SliceZone from '../components/slices/sliceZone';
import HomePageTemplate from '../components/templates/homepage/homePageTemplate';
import Layout from '../components/templates/layout/layout';
import Loader from '../components/atoms/loader/loader';
import Weirwood from '../components/organisms/weirwood/weirwood';
import homeQuery from '../queries/home.graphql';

const HomePage = () => {
  const { loading, error, data } = useQuery(homeQuery, {
    variables: {
      section: 'homePage',
    },
  });

  if (loading) return <Loader />;
  if (error) {
    console.log('error: ', error);
  }

  const page = data.entries[0];

  console.log(data);

  return (
    page && (
      <Layout title="WesterosCraft">
        <HomePageTemplate>
          <Flex flexDirection="column" width={1} mx="auto" textAlign="center" px={[5, 8]}>
            <Text fontSize={[42, 60]} maxWidth={540} mx="auto" fontWeight="bold">
              {' '}
              {page.heading}{' '}
            </Text>{' '}
            <Text variant="heading3" mt={6} fontWeight="bold">
              {' '}
              {page.subheading}{' '}
            </Text>{' '}
          </Flex>{' '}
          {/* <Weirwood /> */}{' '}
        </HomePageTemplate>{' '}
        <SliceZone slices={page.slices} />{' '}
      </Layout>
    )
  );
};

export default HomePage;
