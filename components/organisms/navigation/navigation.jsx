import React from 'react';
import { Flex, Image, Box, Text } from 'rebass';

const Navigation = ({ nav }) => {
  return (
    <Flex
      as="nav"
      bg="transparent"
      flexDirection="row"
      justifyContent="space-between"
      width={1}
      sx={{
        position: 'fixed',
        zIndex: 9999
      }}
    >
      <Box>
        <Image src={nav.logo.url} height={30} width={212} alt={nav.logo.alt} />
      </Box>
      <Box>
        <Flex flexDirection="row">
          {nav.navlink.map(link => (
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
