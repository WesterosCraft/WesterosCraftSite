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

  return navdata ? (
    <Flex
      width={1}
      sx={{ position: 'absolute', zIndex: 9999 }}
      as="header"
      alignItems="center"
      justifyContent="space-between"
      px={[5]}
    >
      <Box>
        <Image src={navLogo[0].url} width={194} />
      </Box>
      <Flex flexDirection="row" alignItems="center">
        {navdata.map((item, index) =>
          item.dropdownItems && item.dropdownItems.length < 1 ? (
            <NavLink id={index} link={item.mainNavLink}>
              {item.mainNavLabel}
            </NavLink>
          ) : (
            <NavLink id={index}>{item.mainNavLabel}</NavLink>
          )
        )}
      </Flex>
    </Flex>
  ) : (
    ''
  );
};

export default Nav;
