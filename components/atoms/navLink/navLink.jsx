import React from 'react';
import { Text, Button } from 'rebass';

const NavLink = ({ children, id, link }) =>
  link ? (
    <a href={link} key={id}>
      <Text
        as="span"
        color="textColor"
        fontSize={[3]}
        lineHeight="50px"
        sx={{
          textTransform: 'uppercase',
          display: 'block',
          '&:hover': {
            color: 'brandRed',
          },
        }}
        px={[6]}
      >
        {children}
      </Text>
    </a>
  ) : (
    <Button
      sx={{
        outline: 'none',
      }}
    >
      <Text
        as="span"
        key={id}
        color="textColor"
        fontSize={[3]}
        lineHeight="50px"
        sx={{
          textTransform: 'uppercase',
          display: 'block',
          '&:hover': {
            color: 'brandRed',
          },
        }}
        px={[6]}
      >
        {children}
      </Text>
    </Button>
  );

export default NavLink;
