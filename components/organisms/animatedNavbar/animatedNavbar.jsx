import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navbar from '../navbar/navbar';
import NavbarItem, { NavbarItemTitle, NavbarItemEl } from '../../atoms/navbarItem/navbarItem';
import navQuery from '../../../queries/nav.graphql';

const AnimatedNavbar = () => {
  const { loading, error, data } = useQuery(navQuery);
  const navdata = data && data.globalSets && data.globalSets[0].navLink;

  if (loading) return null;
  if (error) return null;
  return (
    <Navbar>
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
          <NavbarItem title={n.mainNavLabel} index={index} key={index} dropdownData={n.dropdownItems} />
        )
      )}
    </Navbar>
  );
};

export default AnimatedNavbar;
