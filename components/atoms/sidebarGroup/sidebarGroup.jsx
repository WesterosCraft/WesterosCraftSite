import React, { useState } from 'react';
import { Text, Box, Flex } from 'rebass';
import { IoIosArrowUp } from 'react-icons/io';

const SidebarGroup = ({ label, children, open }) => {
  const [isOpen, setOpen] = useState(open);
  return (
    <>
      <Flex
        onClick={() => setOpen(!isOpen)}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.7,
          },
        }}
      >
        <Text variant="paragraph" color="brandRed" fontWeight="600" py={2}>
          {label}
        </Text>
        <IoIosArrowUp color="#9B1313" style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }} />
      </Flex>

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
