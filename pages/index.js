import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Text } from 'rebass';
import { client } from '../prismic-configuration';
import SliceZone from '../components/slices/sliceZone';
import HomePageTemplate from '../components/templates/homepage/homePageTemplate';

const HomePage = props => {
  const { data } = props.home;

  return data ? (
    <>
      <HomePageTemplate background={data.background_image}>
        <Text variant="h1"> {RichText.asText(data.heading)} </Text>{' '}
        <Text variant="h6"> {RichText.asText(data.subheading)} </Text>{' '}
      </HomePageTemplate>{' '}
      <SliceZone slices={data.body} />{' '}
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
