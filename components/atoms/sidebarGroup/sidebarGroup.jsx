import React, { useState, useEffect } from 'react';
import { Text, Box } from 'rebass';

const SidebarGroup = ({ label, children, open }) => {
  const [isOpen, setOpen] = useState(open);
  return (
    <>
      <Text
        variant="paragraph"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.7,
          },
        }}
        color="brandRed"
        fontWeight="600"
        py={2}
        onClick={() => setOpen(!isOpen)}
      >
        {label}
      </Text>
      {isOpen && (
        <Box
          pl={4}
          sx={{
            borderLeft: '1.5px solid #C4C4C4',
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default SidebarGroup;
