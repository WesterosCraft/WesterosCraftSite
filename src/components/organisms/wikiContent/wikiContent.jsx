import React from 'react'
import { Box } from 'rebass'

export const WikiContent = ({ children }) => (
  <Box as="article" ml={13}>
    {children}
  </Box>
)
