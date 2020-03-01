import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Flex, Box } from 'rebass';
import NavbarItem, { NavbarItemTitle, NavbarItemEl } from '../../atoms/navbarItem/navbarItem';
import { GET_NAV } from '../../../queries/navQuery';
import WesterosCraftLogo from '../../atoms/westeroscraftLogo/westeroscraftLogo';
import MobileNavbar from '../mobileNavbar/mobileNavbar';

const Navbar = () => {
  const { loading, error, data } = useQuery(GET_NAV);
  const navdata = data && data.globalSets && data.globalSets[0].navLink;

  if (loading) return null;
  if (error) return null;
  return (
    <Flex
      width={1}
      sx={{ position: 'absolute', zIndex: 998 }}
      as="nav"
      flexDirection="column"
      px={[5]}
      bg="white"
    >
      <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box>
          <a href="/">
            <WesterosCraftLogo style={{ width: '194px' }} color="black" />
          </a>
        </Box>
        <MobileNavbar />
        <Box flexDirection="row" alignItems="center" as="ul" display={['none', null, 'flex']}>
          {navdata.map((n, index) =>
            n.dropdownItems && n.dropdownItems.length < 1 ? (
              <NavbarItemEl key={index} title={n.mainNavLabel}>
                <NavbarItemTitle
                  color="textColor"
                  fontSize={3}
                  as="a"
                  href={n.mainNavLink}
                  sx={{
                    textTransform: 'uppercase',
                    display: 'block',
                    '&:hover, &:focus': {
                      color: 'brandRed',
                    },
                    '&:visited': {
                      color: 'black',
                    },
                  }}
                >
                  {n.mainNavLabel}
                </NavbarItemTitle>
              </NavbarItemEl>
            ) : (
              <NavbarItem
                title={n.mainNavLabel}
                index={index}
                key={index}
                dropdownData={n.dropdownItems}
              />
            )
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
