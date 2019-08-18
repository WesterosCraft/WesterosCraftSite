import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: none;
    }
  body, html {
    font-family: ${props => props.theme.typography.primary_font};
    color: ${props => props.theme.colors.text_color};
    padding: 0;
    margin: 0;
    height: 100%;
    background: ${props => props.theme.colors.background_color};
    overflow: auto;
  }
`;

export default GlobalStyle;
