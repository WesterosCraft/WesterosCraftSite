import React from 'react';
import { Box } from 'rebass';
import styled from '@emotion/styled';

const Caret = styled.div`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #fff;
  top: -20px;
  left: calc(50% - 10px);
  z-index: 1;
`;

const DropdownBackground = styled(Box)`
  transform-origin: 0 0;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const DropdownContainer = ({ children, className, ...props }) => {
  return (
    <>
      {/* <Caret /> */}
      <DropdownBackground className={`dropdown-container ${className} `} {...props}>
        {children}
      </DropdownBackground>
    </>
  );
};

export default DropdownContainer;
