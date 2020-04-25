import React from 'react';

import { Button as Base, Box } from 'rebass';
import styled from '@emotion/styled';

const StyledButton = styled(Base)`
  border-radius: 0;
  cursor: pointer;
  min-width: 180px;
  transition: all 150ms ease-out 0s;
  padding: 14px 20px;
  width: fit-content;
  line-height: 1;
  text-transform: uppercase;
  &:hover {
    transform: translate3d(0px, -2px, 0px);
  }
  &:active {
    transform: translate3d(0px, 0px, 0px);
  }
`;

export const Button = ({ as = 'a', children, ...props }) => (
  <StyledButton as={as} {...props} mx="10px" className="button">
    <Box
      as="span"
      sx={{
        display: 'inline-flex',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: 'heading',
        lineHeight: 1,
        padding: '14px 20px',
        transform: 'scale3d(1, 1, 1) translate3d(0px, 0px, 0px)',
        opacity: 1,
        transition: 'transform 700ms cubic-bezier(0.175, 0.885, 0.335, 1.05) 0s',
        verticalAlign: 'top',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        padding: 0,
      }}
    >
      {children}
    </Box>
  </StyledButton>
);
