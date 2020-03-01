import React from 'react';
import { ButtonWrapper } from './styledButton';

const Button = ({ children, ...props }) => <ButtonWrapper {...props}>{children}</ButtonWrapper>;

export default Button;
