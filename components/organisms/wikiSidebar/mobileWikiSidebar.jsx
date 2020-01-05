import React from 'react';
import { Text, Flex } from 'rebass';

const MobileWikiSidebar = () => (
  <Flex
    justifyContent="flex-end"
    display={['flex', null, 'none']}
    py={[4]}
    px={[5]}
    sx={{
      borderBottom: '1px solid rgb(240, 240, 240)',
      borderTop: '1px solid rgb(240, 240, 240)',
    }}
  >
    <Text>show list</Text>
  </Flex>
);

export default MobileWikiSidebar;
