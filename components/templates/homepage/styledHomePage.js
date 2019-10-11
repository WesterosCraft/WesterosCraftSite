import styled from '@emotion/styled';
import { Box } from 'rebass';

export const Section = styled(Box)`
  height: 800px;
  position: relative;
`;

export const Background = styled(Box)`
  &::before {
    content: '';
    position: absolute;
    background-image: linear-gradient(180deg, rgba(27, 28, 38, 0.2) 0%, #1b1c26 100.89%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
