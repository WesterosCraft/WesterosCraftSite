import React from 'react';
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

const Navbar = ({ children, onMouseLeave }) => (
  <NavbarEl onMouseLeave={onMouseLeave}>
    <NavbarList>{children}</NavbarList>
  </NavbarEl>
);

export default Navbar;
