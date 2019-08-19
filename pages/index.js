import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Text, Box, Flex } from 'rebass';
import { client } from '../prismic-configuration';
import SliceZone from '../components/slices/sliceZone';
import HomePageTemplate from '../components/templates/homepage/homePageTemplate';

const HomePage = props => {
  const { data } = props.home;

  return data ? (
    <>
      <HomePageTemplate background={data.background_image}>
        <Flex flexDirection="row" px={12}>
          <Box width={1 / 2} pl={5}>
            <Text variant="heading1">{RichText.asText(data.heading)}</Text>
            <Text variant="heading6" mt={6}>
              {RichText.asText(data.subheading)}
            </Text>
          </Box>
          <Box width={1 / 2} px={5} />
        </Flex>
      </HomePageTemplate>
      <SliceZone slices={data.body} />
    </>
  ) : (
    'Loading...'
  );
};

HomePage.getInitialProps = async context => {
  const home = await client.getSingle('home_page');

  return {
    home,
  };
};

export default HomePage;
