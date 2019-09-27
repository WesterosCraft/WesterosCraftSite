import React from 'react';
import { Text, Box } from 'rebass';

const TableTitle = () => (
  <Box
    textAlign="left"
    bg="#F3F4FB"
    sx={{
      display: 'grid',
      gridTemplateColumns: '2fr 2fr 2fr 2fr 1fr 1fr',
      margin: '0 auto',
      height: 36,
      alignItems: 'center',
    }}
  >
    <Text variant="progress" textAlign="left" pl={5}>
      Region
    </Text>
    <Text variant="progress">Name</Text>
    <Text variant="progress">Status</Text>
    <Text variant="progress">Type</Text>
    <Text variant="progress">Started</Text>
    <Text variant="progress">Completed</Text>
  </Box>
);

export default TableTitle;
