import React from 'react'

import { Button as Base, Box } from 'rebass'
import styled from '@emotion/styled'

const StyledButton = styled(Base)`
  border-radius: 0;
  cursor: pointer;
  width: 180px;
  transition: all 150ms ease-out 0s;
  &:hover {
    transform: translate3d(0px, -2px, 0px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 3em inset;
    transform: translate3d(0px, 0px, 0px);
  }
`

export const Button = ({ as = 'a', children, ...props }) => (
  <StyledButton as={as} {...props} mx="10px">
    <Box
      as="span"
      sx={{
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'heading',
        lineHeight: 1,
        padding: '13px 20px',
        transform: 'scale3d(1, 1, 1) translate3d(0px, 0px, 0px)',
        opacity: 1,
        transition: 'transform 700ms cubic-bezier(0.175, 0.885, 0.335, 1.05) 0s',
      }}
    >
      {children}
    </Box>
  </StyledButton>
)
