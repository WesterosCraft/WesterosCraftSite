import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';

const WikiDropdown = ({ data }) => {
  console.log(data);
  return (
    <DropdownContainer className="wiki-dropdown" sx={{ transform: 'translateX(0px)' }}>
      <Box p={5} />
    </DropdownContainer>
  );
};

export default WikiDropdown;
