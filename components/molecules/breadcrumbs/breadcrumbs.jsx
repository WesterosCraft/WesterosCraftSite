import React from 'react';
import { Box, Text } from 'rebass';

const Breadcrumbs = () => {
  return (
    <Box className="breadcrumbs" sx={{ position: 'absolute', top: '-36px' }} display={['none', null, 'flex']}>
      <Text>breadcrumb</Text>
    </Box>
  );
};

export default Breadcrumbs;
