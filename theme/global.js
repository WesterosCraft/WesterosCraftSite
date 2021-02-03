import { css, Global } from '@emotion/core';
import { theme } from './theme';

export const globalStyles = (
  <Global
    styles={css`
      #__next {
        overflow: hidden;
      }
    `}
  />
);
