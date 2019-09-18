import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Text, Box, Flex } from 'rebass';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import SliceZone from '../components/slices/sliceZone';
import HomePageTemplate from '../components/templates/homepage/homePageTemplate';

const HomePage = ({ home }) => {
  const test = useQuery(`query {
    allHome_pages {
      edges {
        node {
          heading
          subheading
          background_image
          body {
            ... on Home_pageBodyText {
              type
              primary {
                text
                color
                alignment
                margin_top
                margin_bottom
                padding_top
                padding_bottom
              }
            }
            ... on Home_pageBodyVideo {
              type
              primary {
                margin_top
                padding_top
                margin_bottom
                padding_bottom
                thumbnail_image
                video
              }
            }
            ... on Home_pageBodyAnimated_image_text {
              type
              primary {
                image
                margin_top
                margin_bottom
                padding_top
                padding_bottom
              }
            }
            __typename
          }
        }
      }
    }
  }`);

  console.log('TEST: ', test);
  return <h1> test </h1>;
};

export default HomePage;
