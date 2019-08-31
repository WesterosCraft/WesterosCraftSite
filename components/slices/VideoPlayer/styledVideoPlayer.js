import styled from 'styled-components';
import { Heading, Box } from 'rebass';
import { getColor } from '../../../theme/theme';

export const Caption = styled(Heading)`
  text-align: center;
  font-weight: 400;
  color: ${getColor('alt__primary__color')};
`;

export const Container = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 756px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 445;
`;
