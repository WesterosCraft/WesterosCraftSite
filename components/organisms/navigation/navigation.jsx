import React from 'react';
import { Flex, Image, Box, Text } from 'rebass';
import { RichText } from 'prismic-reactjs';
import gql from 'graphql-tag';
import { aclient } from '../../../prismic-configuration';

const Navigation = ({ nav }) => {
  const { data } = nav;

  return (
    <Flex
      as="nav"
      bg="transparent"
      flexDirection="row"
      justifyContent="space-between"
      width={1}
      sx={{
        position: 'fixed',
        zIndex: 9999,
      }}
    >
      <Box>
        <Image src={data.logo.url} height={30} width={212} alt={data.logo.alt} />
      </Box>
      <Box>
        <Flex flexDirection="row">
          {data.navlink.map(link => (
            <Text key={link.navigation_label} variant="heading6">
              {link.navigation_label}
            </Text>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navigation;

aclient
  .query({
    query: gql`
      query {
        allNavigations {
          edges {
            node {
              logo
              _linkType
            }
          }
        }
      }
    `,
  })
  .then(response => {
    console.log('GQL', response);
  })
  .catch(error => {
    console.error(error);
  });
