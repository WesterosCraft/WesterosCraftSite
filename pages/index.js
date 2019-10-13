import React from 'react';
import { Text, Box, Flex } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import SliceZone from '../components/slices/sliceZone';
import HomePageTemplate from '../components/templates/homepage/homePageTemplate';
import homeQuery from '../queries/home.graphql';
import Layout from '../components/templates/layout/layout';

const HomePage = () => {
  const { loading, error, data } = useQuery(homeQuery);

  if (error) {
    console.log('error', error);
    return <h1> error! </h1>;
  }
  if (loading) return <h1> Loading... </h1>;
  // if (!page) return throw404();

  const page = data.entries[0];

  return (
    page && (
      <Layout>
        <HomePageTemplate background={page.backgroundImage[0].url}>
          <Flex flexDirection={['column', 'row']} maxWidth={1178} mx="auto">
            <Box width={[1, 1 / 2]}>
              <Text variant="heading1" textAlign={['center', 'left']} color="white">
                {page.heading}
              </Text>
              <Text variant="paragraph" mt={9} color="white">
                {page.subheading}
              </Text>
            </Box>
            <Box width={[1, 1 / 2]}> </Box>
          </Flex>
        </HomePageTemplate>
        <SliceZone slices={page.slices} />
      </Layout>
    )
  );
};

export default HomePage;
