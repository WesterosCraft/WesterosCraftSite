import styled from '@emotion/styled';
import { Flex } from 'rebass';

export const Circle = styled(Flex)`
  visibility: ${props => (props.display ? 'hidden' : 'visible')};
  position: absolute;
  z-index: 1000;
  background-color: #ffffff;
  opacity: 0.5;
  border-radius: 100%;
  transition: all 150ms linear 0s;
  margin: auto;
  top: 0;
  bottom: 0;
  cursor: pointer;
  height: 65px;

  svg {
    height: 16px;
    width: 16px;
  }
`;
