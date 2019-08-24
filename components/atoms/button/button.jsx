import React from 'react';
import { ButtonWrapper } from './styledButton';

const Button = props => <ButtonWrapper {...props}>{props.label}</ButtonWrapper>;

export default Button;
