import React, { useState } from 'react';
import { Flex, Text, Box } from 'rebass';

export const TableHeaderContainer = ({ children, ...props }) => (
  <Flex
    className="progress-table-columns"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-around"
    py={3}
    width={1}
    bg="#f7fafc"
    sx={{
      borderBottom: `1px solid #C4C4C4`,
      borderTop: `1px solid #C4C4C4`,
      position: 'sticky',
      top: 0,
    }}
    {...props}
  >
    {children}
  </Flex>
);
export const TableHeader = ({ children, ...props }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Flex
      flexDirection="row"
      width={1}
      px={4}
      alignItems="center"
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text
        fontWeight="bold"
        fontSize="14px"
        color={hovered ? 'brandRed' : 'textGray'}
        mr={2}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Text>
    </Flex>
  );
};
export const TableCell = ({ children, key, ...props }) => (
  <Box width={1} px={4} key={key} className="progress-table-cell">
    <Text fontSize="14px" as="p" {...props}>
      {children}
    </Text>
  </Box>
);
