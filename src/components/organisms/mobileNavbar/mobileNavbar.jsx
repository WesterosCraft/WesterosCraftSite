import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Box } from 'rebass';
import Popup from 'reactjs-popup';

const MobileNavbar = () => {
  return (
    <Box display={['flex', null, 'none']}>
      <Popup
        trigger={
          <Box p={5} pr={0}>
            <FaBars size={24} />
          </Box>
        }
        position="bottom right"
        on="click"
        closeOnDocumentClick
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        hi
      </Popup>
    </Box>
  );
};

export default MobileNavbar;
