import React from 'react'
import { Flex, Box } from 'rebass'

export const TwoColumnLayout = ({ children, ...restProps }) => (
  <Box {...restProps}>
    <Flex flexDirection={['column', null, null, 'row']} maxWidth={1120} mx="auto">
      {children}
    </Flex>
  </Box>
)

TwoColumnLayout.ColumnOne = function ColumnOne({ children, ...restProps }) {
  return (
    <Box
      width={[1, null, null, 1 / 2]}
      mr={[0, null, null, 8]}
      pb={[8, null, null, 0]}
      {...restProps}
    >
      {children}
    </Box>
  )
}

TwoColumnLayout.ColumnTwo = function ColumnTwo({ children, ...restProps }) {
  return (
    <Box width={[1, null, null, 1 / 2]} ml={[0, null, null, 8]} {...restProps}>
      {children}
    </Box>
  )
}
