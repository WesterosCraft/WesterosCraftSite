import React from 'react';

import { Button as Base, Box } from 'rebass';
import  styled from '@emotion/styled';

const StyledButton = styled(Base)`
    border-radius: 0;
    cursor: pointer;
    width: 180px;
`;

export const Button = ({as = "a", children, ...props}) => (
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
                transition: 'transform 700ms cubic-bezier(0.175, 0.885, 0.335, 1.05) 0s'

        }}>

        {children}
        </Box>
    </StyledButton>
)

