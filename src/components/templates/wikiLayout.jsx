import React from 'react'
import { Box, Flex } from 'rebass'

export const WikiLayout = ({ children }) => (
  <Box className="wiki-layout">
    <Box bg="green" minHeight={55} width={1} />
    <Flex flexDirection="row" justifyContent="center" height="100%" mt={16} px={5}>
      {children}
    </Flex>
  </Box>
)
