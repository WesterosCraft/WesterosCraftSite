import React from 'react';
import { Flex, Text, Box, Image } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import navQuery from '../../../queries/nav.graphql';
import NavLink from '../../atoms/navLink/navLink';

const Nav = () => {
  const { loading, error, data } = useQuery(navQuery);

  if (loading) return null;
  if (error) return null;

  const navdata = data && data.globalSets && data.globalSets[0].navLink;
  const navLogo = data && data.globalSets && data.globalSets[0].navLogo;

  console.log(navLogo);

  return navdata ? (
    <Flex
      width={1}
      sx={{ position: 'fixed', zIndex: 9999 }}
      as="header"
      justifyContent="space-between"
    >
      <Box>
        <Image src={navLogo[0].url} width={294} />
      </Box>
      <Box as="ul">
        {navdata.map((item, index) =>
          item.dropdownItems && item.dropdownItems.length < 1 ? (
            <NavLink id={index} link={item.mainNavLink}>
              {item.mainNavLabel}
            </NavLink>
          ) : (
            <NavLink id={index}>{item.mainNavLabel}</NavLink>
          )
        )}
      </Box>
    </Flex>
  ) : (
    ''
  );
};

export default Nav;
