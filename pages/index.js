import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Text } from 'rebass';
import { client } from '../prismic-configuration';

const HomePage = props => {
  const { data } = props.home;

  console.log(data);

  return (
    <div>
      <Text variant="h1">{RichText.asText(data.heading)}</Text>
      <Text variant="h6">{RichText.asText(data.subheading)}</Text>
    </div>
  );
};

HomePage.getInitialProps = async context => {
  const home = await client.getSingle('home_page');

  return { home };
};

export default HomePage;
