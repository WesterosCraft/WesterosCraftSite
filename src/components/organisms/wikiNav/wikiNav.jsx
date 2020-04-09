import React from 'react'
import { Box } from 'rebass'

export const WikiNav = ({ navData }) => (
  <Box
    as="nav"
    className="wiki-nav"
    width={320}
    sx={{
      borderRight: '1px solid black',
      display: ['none', null, 'block'],
    }}
  >
    {console.log(navData)}
    nav
  </Box>
)
