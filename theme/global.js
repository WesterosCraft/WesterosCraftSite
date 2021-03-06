import { css, Global } from '@emotion/core';
import { theme } from './theme';

export const globalStyles = (
  <Global
    styles={css`
      #__next {
        overflow: hidden;
      }

      .light-mode {
        --theme-colors-background: #ffffff;
        --theme-colors-alt-background: #161617;
        --theme-colors-text: #333333;
        --theme-colors-alt-text: #f3f4f4;
        --theme-colors-hero-gradient: linear-gradient(to top, rgba(255, 255, 255, 0) 40%, white 60%),
          url('/bright-squares.png');
        --theme-colors-gray-100: #666666;
        --theme-colors-gray-200: #333333;
        --theme-colors-gray-300: #231f20;
        --theme-colors-gray-400: #cccccc;
        --theme-colors-red-light: #b32227;
        --theme-colors-red-medium: #9e1e22;
        --theme-colors-red-dark: #891a1d;
        --theme-colors-table-even: #fafafc;
        --theme-colors-table-odd: #ffffff;
        --theme-colors-table-border: #e2e8f0;
      }
      .dark-mode {
        --theme-colors-background: #161617;
        --theme-colors-alt-background: #ffffff;
        --theme-colors-text: #f3f4f4;
        --theme-colors-alt-text: #333333;
        --theme-colors-hero-gradient: linear-gradient(
            to top,
            rgba(255, 255, 255, 0) 40%,
            #161617 60%
          ),
          url('/bright-squares.png');
        --theme-colors-gray-100: #f3f4f4;
        --theme-colors-gray-200: #e3e3e3;
        --theme-colors-gray-300: #231f20;
        --theme-colors-gray-400: #e3e3e3;
        --theme-colors-table-even: #343a40;
        --theme-colors-table-odd: hsla(0, 0%, 100%, 0.05);
        --theme-colors-table-border: #454d55;
      }

      .mobile-popup-content {
        left: 0 !important;
        top: 0 !important;
      }

      .circle-progress-symbol {
        font-weight: bold;
        color: ${theme.colors.light.text};
      }

      .react-sweet-progress-symbol {
        color: ${theme.colors.light.text};
      }

      .custom-select {
        z-index: 999;
      }

      .vertical-timeline-element-date {
        color: #333;
      }

      .tl-edges {
        overflow: hidden;
      }

      .lazy-loaded-image-span {
        display: block !important;
      }

      html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        margin: 0;
        padding: 0;
        border: 0;
      }

      body {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: ${theme.fonts.body};
        font-size: 16px;
        color: var(--theme-colors-text);
        background-color: var(--theme-colors-background);
      }

      main {
        display: block;
        background-color: var(--theme-colors-background);
      }

      .light-mode .region-icon {
        fill: black;
        path: {
          fill: black;
        }
      }

      .dark-mode .region-icon {
        fill: #f3f4f4;
        path: {
          fill: #f3f4f4;
        }
      }

      hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
      }

      pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }

      a {
        background-color: transparent;
        text-decoration: none;
        color: var(--theme-colors-text);
      }

      abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
      }

      code,
      kbd,
      samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
      }

      button,
      input {
        /* 1 */
        overflow: visible;
      }
      button,
      select {
        /* 1 */
        text-transform: none;
      }

      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
      }

      button::-moz-focus-inner,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      button:-moz-focusring,
      [type='button']:-moz-focusring,
      [type='reset']:-moz-focusring,
      [type='submit']:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type='checkbox'],
      [type='radio'] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
      }

      [type='number']::-webkit-inner-spin-button,
      [type='number']::-webkit-outer-spin-button {
        height: auto;
      }

      [type='search'] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
      }

      [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none;
      }

      .react-images__view-wrapper {
        text-align: center;
      }

      .block-modal-content.popup-content {
        width: 90% !important;
      }

      @media screen and (min-width: 768px) {
        .block-modal-content.popup-content {
          width: 55% !important;
        }
      }
    `}
  />
);
