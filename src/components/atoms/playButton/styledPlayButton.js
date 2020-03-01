import styled from '@emotion/styled';

export const PlayArrow = styled.svg`
  width: 25px;
  height: 25px;
  fill: white;
  position: absolute;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    width: 45px;
    height: 45px;
  }
`;
