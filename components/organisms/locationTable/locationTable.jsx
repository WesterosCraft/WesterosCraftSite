import React from 'react';
import { Text, Box, Flex, Button } from 'rebass';
import { RichText } from 'prismic-reactjs';

const LocationTable = ({ pages }) =>
  pages.map(page => (
    <Text color="white" key={RichText.asText(page.node.location_name)}>
      {' '}
      {RichText.asText(page.node.location_name)}{' '}
    </Text>
  ));

export default LocationTable;
