import styled from '@emotion/styled';
import { Flex } from 'rebass';

export const StyledTabs = styled(Flex)`
  .tab {
    border-right: 1px solid #d4d4d5;
    border-bottom: 1px solid #d4d4d5;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-right: none;
    }
  }
`;
