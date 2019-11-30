import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navbar from '../navbar/navbar';
import NavbarItem, { NavbarItemTitle, NavbarItemEl } from '../../atoms/navbarItem/navbarItem';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';
import AboutDropdown from '../../molecules/aboutDropdown/aboutDropdown';
import CommunityDropdown from '../../molecules/communityDropdown/communityDropdown';
import WikiDropdown from '../../molecules/wikiDropdown/wikiDropdown';
import navQuery from '../../../queries/nav.graphql';

const navbarConfig = [
  { title: 'About', dropdown: AboutDropdown },
  { title: 'Community', dropdown: CommunityDropdown },
  { title: 'Wiki', dropdown: WikiDropdown },
];

const AnimatedNavbar = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [activeDropdown, setActiveDropdown] = useState('');
  const { loading, error, data } = useQuery(navQuery);

  const navdata = data && data.globalSets && data.globalSets[0].navLink;
  const navLogo = data && data.globalSets && data.globalSets[0].navLogo;

  const onMouseEnter = i => {
    if (activeIndices[activeIndices.length - 1] === i) return;
    setActiveIndices(prevState => {
      return setActiveIndices(prevState.concat(i));
    });
  };

  const onMouseLeave = () => {
    setActiveIndices([]);
  };

  useEffect(() => {
    setCurrentIndex(activeIndices[activeIndices.length - 1]);

    if (typeof currentIndex === 'number') {
      setActiveDropdown(navbarConfig[currentIndex].title);
    }
  }, [currentIndex, activeIndices]);

  const renderSwitch = (item, dropdownData) => {
    switch (item) {
      case 'About':
        return <AboutDropdown data={dropdownData} />;
      case 'Community':
        return <CommunityDropdown />;
      case 'Wiki':
        return <WikiDropdown />;
      default:
        return 'foo';
    }
  };

  if (loading) return null;
  if (error) return null;
  return (
    <Navbar onMouseLeave={onMouseLeave} navLogo={navLogo}>
      {navdata.map((n, index) =>
        n.dropdownItems && n.dropdownItems.length < 1 ? (
          <NavbarItemEl>
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
              }}
            >
              {n.mainNavLabel}
            </NavbarItemTitle>
          </NavbarItemEl>
        ) : (
          <NavbarItem title={n.mainNavLabel} index={index} onMouseEnter={onMouseEnter}>
            {currentIndex === index && (
              <DropdownContainer>{renderSwitch(activeDropdown, n.dropdownItems)}</DropdownContainer>
            )}
          </NavbarItem>
        )
      )}
    </Navbar>
  );
};

export default AnimatedNavbar;
