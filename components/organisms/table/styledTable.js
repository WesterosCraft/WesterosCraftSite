import React from 'react';
import styled from '@emotion/styled';
import { Flex, Text, Box } from 'rebass';
import { IoMdFunnel } from 'react-icons/io';
import hexToRgba from 'hex-to-rgba';

export const TableHeaderContainer = ({ children, ...props }) => (
  <Flex
    className="progress-table-columns"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-around"
    py={3}
    width={1}
    bg="white"
    sx={{
      borderBottom: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
      borderTop: `1px solid ${hexToRgba('#C4C4C4', 0.3)}`,
      position: 'sticky',
      top: 0,
    }}
    {...props}
  >
    {children}{' '}
  </Flex>
);

export const TableHeader = ({ children, ...props }) => (
  <Flex flexDirection="row" width={1} px={4} alignItems="center" {...props}>
    <Text
      variant="progress"
      fontWeight="bold"
      color="textGray"
      mr={2}
      sx={{
        textTransform: 'uppercase',
      }}
    >
      {children}{' '}
    </Text>{' '}
    <IoMdFunnel />
  </Flex>
);

export const TableCell = ({ children, key, ...props }) => (
  <Box width={1} px={4} key={key}>
    <Text variant="progress" color="textGray" {...props}>
      {' '}
      {children}{' '}
    </Text>{' '}
  </Box>
);
