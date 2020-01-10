import React from 'react';
import styled from '@emotion/styled';
import Popup from 'reactjs-popup';
import AboutDropdown from '../../molecules/aboutDropdown/aboutDropdown';
import CommunityDropdown from '../../molecules/communityDropdown/communityDropdown';
import WikiDropdown from '../../molecules/wikiDropdown/wikiDropdown';

export const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  font-weight: 500;
  &:visited {
    color: black;
  }

  &:hover,
  &:focus {
    color: #9b1313;
  }

  &:focus {
    outline: 0;
  }
`;
export const NavbarItemEl = styled.li`
  position: relative;
  margin-left: 0.5rem;
  &::first-of-type {
    margin-left: 0;
  }
`;

const NavbarItem = ({ title, dropdownData }) => {
  const renderSwitch = (item, data) => {
    switch (item) {
      case 'About':
        return <AboutDropdown data={data} />;
      case 'Community':
        return <CommunityDropdown data={data} />;
      case 'Wiki':
        return <WikiDropdown data={data} />;
      default:
        return null;
    }
  };
  return (
    <Popup
      mouseLeaveDelay={50}
      arrow
      trigger={
        <NavbarItemEl>
          <NavbarItemTitle
            color="textColor"
            fontSize={3}
            sx={{
              textTransform: 'uppercase',
              display: 'block',
              '&:hover, &:focus': {
                color: 'brandRed',
              },
            }}
          >
            {title}
          </NavbarItemTitle>
        </NavbarItemEl>
      }
      position="bottom right"
      on="click"
      closeOnDocumentClick
      mouseEnterDelay={0}
      contentStyle={{
        padding: '0px',
        width: 'fit-content',
        border: 'none',
        boxShadow:
          '0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
      }}
      arrowStyle={{
        boxShadow:
          '0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      {renderSwitch(title, dropdownData)}
    </Popup>
  );
};

export default NavbarItem;
