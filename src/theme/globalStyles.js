import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyles = props => (
  <Global
    {...props}
    styles={css`
      * {
        font-family: ${props.theme.font.primaryFont};
      }

      body,
      html {
        background-color: ${props.theme.colors.backgroundColor};
        height: 100%;
        margin: 0;
        padding: 0;
      }

      h1 {
        ${props.theme.text.heading1}
      }
      h2 {
        ${props.theme.text.heading2}
      }

      .flickity-viewport {
        max-height: 500px;

        img {
          max-width: 100%;
          height: auto;
          border: 0;
        }
      }

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        font-family: ${props.theme.font.primaryFont};
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      a {
        text-decoration: none;
      }
      button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;

        background: transparent;

        color: inherit;
        font: inherit;

        line-height: normal;

        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        -webkit-appearance: none;
      }

      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }

      .carousel .thumb {
        height: 80px;
      }
    `}
  />
);
