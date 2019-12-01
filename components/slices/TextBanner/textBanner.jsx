import React from 'react';
import { Text, Flex, Image, Box } from 'rebass';
import Button from '../../atoms/button/button';

const TextBanner = ({ input }) => {
  console.log('banner input: ', input);
  return (
    <Flex
      flexDirection="row"
      width="100%"
      mx="auto"
      justifyContent="center"
      textAlign="center"
      mt={[input.marginTop]}
      mb={[input.marginBottom]}
      pt={input.paddingTop}
      pb={input.paddingBottom}
    >
      <Flex flexDirection="column" alignItems="flex-start">
        <Text>{input.heading}</Text>
        <Text>{input.subtitle}</Text>
      </Flex>
      <Box>
        <Button variant={input.buttonType}>{input.buttonText}</Button>
      </Box>
    </Flex>
  );
};

export default TextBanner;
