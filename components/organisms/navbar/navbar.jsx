import React from 'react';
import { Flex, Box } from 'rebass';
import WesterosCraftLogo from '../../atoms/westeroscraftLogo/westeroscraftLogo';

const Navbar = ({ children, onMouseLeave }) => (
  <Flex
    onMouseLeave={onMouseLeave}
    width={1}
    sx={{ position: 'absolute', zIndex: 9999 }}
    as="nav"
    flexDirection="column"
    px={[5]}
  >
    <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box>
        <a href="/">
          <WesterosCraftLogo style={{ width: '194px' }} color="black" />
        </a>
      </Box>
      <Flex flexDirection="row" alignItems="center" as="ul">
        {children}
      </Flex>
    </Flex>
  </Flex>
);

export default Navbar;
