import React from 'react';
import styled from '@emotion/styled';

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-size: 18px;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  color: black;
  font-family: inherit;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  }
`;
const NavbarItemEl = styled.li`
  position: relative;
  margin-left: 0.5rem;
  &::first-of-type {
    margin-left: 0;
  }
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1000px;
`;

const NavbarItem = ({ title, children, onMouseEnter, index }) => {
  const onMouseEnterFunc = () => {
    onMouseEnter(index);
  };
  return (
    <NavbarItemEl onMouseEnter={onMouseEnterFunc} onFocus={onMouseEnterFunc}>
      <NavbarItemTitle>{title}</NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemEl>
  );
};

export default NavbarItem;
