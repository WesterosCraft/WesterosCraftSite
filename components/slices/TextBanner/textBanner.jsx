import React from 'react';
import { Text, Flex, Box } from 'rebass';
import Button from '../../atoms/button/button';

const TextBanner = ({ input }) => (
  <Flex
    flexDirection={['column', null, 'row']}
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
      <Text variant="heading2" as="h2" fontWeight="600">
        {input.heading}
      </Text>
      <Text variant="heading3" as="h3" mt={3}>
        {input.subtitle}
      </Text>
    </Flex>
    <Box ml={[0, null, 15]} mt={[6, null, 0]}>
      <Button variant={input.buttonType}>{input.buttonText}</Button>
    </Box>
  </Flex>
);

export default TextBanner;
