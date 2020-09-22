import React from 'react';
import { Text, Flex, Heading } from 'rebass';
import { Button } from '../components/atoms/button';

const NotFoundPage = () => (
  <Flex
    width={1}
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    px={5}
    my={[180, 300]}>
    <Heading variant="heading1" as="h1" textAlign="center">
      PAGE NOT FOUND
    </Heading>
    <Text mt={5} variant="heading6" textAlign="center">
      Uh oh...you've reached the end of the map! Don't sail into the west just yet.
    </Text>
    <Button mt={12} variant="red" href="/">
      Go Home
    </Button>
  </Flex>
);

export default NotFoundPage;
