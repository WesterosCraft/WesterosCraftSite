import React from 'react';
import { Flex, Image, Box, Text } from 'rebass';
import { RichText } from 'prismic-reactjs';

const Navigation = ({ nav }) => {
  const { data } = nav;

  console.log(data);
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
