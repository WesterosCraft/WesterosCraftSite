import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import NavbarItem from '../../atoms/navbarItem/navbarItem';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';
import AboutDropdown from '../../molecules/aboutDropdown/aboutDropdown';
import CommunityDropdown from '../../molecules/communityDropdown/communityDropdown';
import WikiDropdown from '../../molecules/wikiDropdown/wikiDropdown';

const navbarConfig = [
  { title: 'About', dropdown: AboutDropdown },
  { title: 'Community', dropdown: CommunityDropdown },
  { title: 'Wiki', dropdown: WikiDropdown },
];

const AnimatedNavbar = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [activeDropdown, setActiveDropdown] = useState('');

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
      setActiveDropdown(navbarConfig[currentIndex].dropdown);
    }
  }, [currentIndex, activeIndices]);

  return (
    <Navbar onMouseLeave={onMouseLeave}>
      {navbarConfig.map((n, index) => {
        return (
          <NavbarItem title={n.title} index={index} onMouseEnter={onMouseEnter}>
            {currentIndex === index && <DropdownContainer>{activeDropdown}</DropdownContainer>}
          </NavbarItem>
        );
      })}
    </Navbar>
  );
};

export default AnimatedNavbar;
