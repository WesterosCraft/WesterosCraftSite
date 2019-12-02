import React, { useState } from 'react';
import { Text, Flex, Image, Box } from 'rebass';
import Button from '../../atoms/button/button';

const FeaturedBanner = ({ input }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      sx={{ position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex
        flexDirection="column"
        width="100%"
        mx="auto"
        justifyContent="center"
        textAlign="center"
        sx={{
          cursor: 'pointer',
          filter: isHovered && 'blur(8px)',
          transition: 'all 150ms ease-out 0s',
        }}
      >
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
      {isHovered && (
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
          }}
        >
          <Button variant={input.buttonType}>{input.buttonLabel}</Button>
        </Box>
      )}
    </Box>
  );
};

export default FeaturedBanner;
