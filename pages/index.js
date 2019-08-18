import React from "react";
import { RichText } from "prismic-reactjs";
import { Text } from "rebass";
import { client } from "../prismic-configuration";

const HomePage = props => {
  const { data } = props.home;

  return (
    <div>
      <Text color="brand_red" variant='paragraph'>{RichText.asText(data.heading)}</Text>
    </div>
  );
};

HomePage.getInitialProps = async context => {
  const home = await client.getSingle("home_page");

  return { home };
};

export default HomePage;
