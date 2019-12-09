import React from 'react';
import { Text, Image, Flex, Box } from 'rebass';

const Stat = ({ stat, label }) => (
  <Flex flexDirection="row" p={4}>
    <Box>
      <Image />
    </Box>
    <Flex flexDirection="column">
      <Text variant="heading4" fontWeight="bold" as="h4">
        {stat}
      </Text>
      <Text fontSize={[1, 2]} as="p">
        {label}
      </Text>
    </Flex>
  </Flex>
);

export default Stat;
