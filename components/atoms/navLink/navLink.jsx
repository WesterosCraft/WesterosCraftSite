import React from 'react';
import { Text } from 'rebass';

const NavLink = ({ children, id, link }) =>
  link ? (
    <a href={link} key={id}>
      <Text color="textColor" fontSize={[3]} sx={{ textTransform: 'uppercase' }} as="span" px={[6]}>
        {children}
      </Text>
    </a>
  ) : (
    <Text
      key={id}
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
