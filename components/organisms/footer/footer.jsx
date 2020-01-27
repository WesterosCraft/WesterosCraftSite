import React from 'react';
import { Flex, Text, Box, Image } from 'rebass';

const Footer = ({ footerImage }) => {
  console.log(footerImage);
  return (
    <Flex bg="gray2" width={1} height={400} as="footer" sx={{ position: 'relative' }} mt={534}>
      <Image src={footerImage.url} sx={{ position: 'absolute', top: -534, left: 0 }} />
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
