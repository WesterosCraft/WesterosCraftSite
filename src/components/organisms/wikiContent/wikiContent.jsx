import React from 'react'
import { Box } from 'rebass'

export const WikiContent = ({ children }) => (
  <Box as="article" ml={[0, null, 13]} className="wiki-content">
    {children}
  </Box>
)
