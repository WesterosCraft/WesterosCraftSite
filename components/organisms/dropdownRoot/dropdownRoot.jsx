import React from 'react';
import { Box } from 'rebass';
import AboutDropdown from '../../molecules/aboutDropdown/aboutDropdown';

const DropdownRoot = () => {
  return (
    <Box className="dropdown-root" sx={{ position: 'relative' }} width={1} height={0}>
      <AboutDropdown />
    </Box>
  );
};

export default DropdownRoot;
