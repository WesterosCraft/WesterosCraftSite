import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Text, Box, Flex } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import SliceZone from '../components/slices/sliceZone';
import HomePageTemplate from '../components/templates/homepage/homePageTemplate';
import homeQuery from '../queries/home.graphql';

const HomePage = () => {
  const { loading, error, data } = useQuery(homeQuery);
  if (error) return <h1> error! </h1>;
  if (loading) return <h1> Loading... </h1>;
  // if (!page) return throw404();

  const page = data.allHome_pages.edges[0].node;

  return (
    <>
      <HomePageTemplate background={page.background_image}>
        <Flex flexDirection={['column', 'row']} maxWidth={1178} mx="auto">
          <Box width={[1, 1 / 2]}>
            <Text variant="heading1" textAlign={['center', 'left']}>
              {' '}
              {RichText.asText(page.heading)}{' '}
            </Text>{' '}
            <Text variant="paragraph" mt={9} color="white">
              {' '}
              {RichText.asText(page.subheading)}{' '}
            </Text>{' '}
          </Box>{' '}
          <Box width={[1, 1 / 2]}> </Box>{' '}
        </Flex>{' '}
      </HomePageTemplate>{' '}
      <SliceZone slices={page.body} />{' '}
    </>
  );
};

export default HomePage;
