import React from 'react';
import { Flex, Box, Image } from 'rebass';

const Navbar = ({ children, onMouseLeave, navLogo }) => (
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
        <Image src={navLogo[0].url} width={194} />
      </Box>
      <Flex flexDirection="row" alignItems="center" as="ul">
        {children}
      </Flex>
    </Flex>
  </Flex>
);

export default Navbar;
