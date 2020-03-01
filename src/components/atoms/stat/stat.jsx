import React from 'react';
import { Text, Image, Flex, Box } from 'rebass';

const Stat = ({ stat, label, color }) => (
  <Flex flexDirection="row" p={4}>
    <Box>
      <Image />
    </Box>
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize={['56px']} fontWeight="bold" as="h4" color={color}>
        {stat}
      </Text>
      <Text fontSize={[1, 2]} as="p" fontWeight={600}>
        {label}
      </Text>
    </Flex>
  </Flex>
);

export default Stat;
