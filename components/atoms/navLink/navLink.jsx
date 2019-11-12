import React from 'react';
import { Text } from 'rebass';

const NavLink = ({ children, key }) => (
  <Text
    key={key}
    color="textColor"
    fontSize={[3]}
    sx={{ textTransform: 'uppercase' }}
    as="span"
    px={[6]}
  >
    {children}
  </Text>
);

export default NavLink;
