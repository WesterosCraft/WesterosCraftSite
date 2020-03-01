import React from 'react';
import { Box } from 'rebass';
import AboutDropdown from '../../molecules/aboutDropdown/aboutDropdown';
import CommunityDropdown from '../../molecules/communityDropdown/communityDropdown';

const DropdownRoot = ({ currentNav }) => {
  return (
    <Box className="dropdown-root" sx={{ position: 'relative' }} width={1} height={0}>
      {currentNav === 'About' && <AboutDropdown />}
      {currentNav === 'Community' && <CommunityDropdown />}
      {currentNav === 'Wiki' && <AboutDropdown />}
    </Box>
  );
};

export default DropdownRoot;
