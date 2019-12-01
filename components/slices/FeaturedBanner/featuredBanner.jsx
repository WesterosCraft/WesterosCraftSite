import React from 'react';
import { Text, Flex, Image } from 'rebass';

const FeaturedBanner = ({ input }) => {
  console.log('banner input: ', input);
  return (
    <Flex flexDirection="column" width="100%" mx="auto" justifyContent="center" textAlign="center">
      <Text variant="heading6" fontWeight="bold">
        {input.heading}
      </Text>
      <Flex
        flexDirection="row"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
        mt={9}
        flexWrap="wrap"
        maxWidth={1240}
        mx="auto"
      >
        {input.logo.map(image => (
          <Image height={64} width={image.imageWidth} src={image.image[0].url} p={3} />
        ))}
      </Flex>
    </Flex>
  );
};

export default FeaturedBanner;
