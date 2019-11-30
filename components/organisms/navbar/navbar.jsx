import React from 'react';
import { Flex, Text, Box, Image } from 'rebass';

import styled from '@emotion/styled';

const NavbarEl = styled.nav`
  margin: 0 auto;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

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
