import React from 'react';
import { Flex, Text, Box } from 'rebass';

const Footer = () => {
  return (
    <Flex bg="gray2" width={1} height={400} as="footer">
      <Flex maxWidth={1024} width={1} mx="auto">
        <Box width={1 / 3}>
          <Text color="white">FOOTER</Text>
        </Box>
        <Box width={1 / 3}>
          <Text color="white">FOOTER</Text>
        </Box>
        <Box width={1 / 3}>
          <Text color="white">FOOTER</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
