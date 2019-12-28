import styled from '@emotion/styled';

const LEFT_COLUMN_WIDTH = '45%';
const RIGHT_COLUMN_WIDTH = '42%';

const Redactor = styled.div`
  * {
    line-height: 1.5;
    font-family: ${props => props.theme.font.primaryFont};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  p {
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 24px;

    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin-right: ${LEFT_COLUMN_WIDTH};
      padding-right: 20px;
    }
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
    padding-top: 16px;
    margin-top: 32px;
    font-weight: 600;

    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin-right: ${LEFT_COLUMN_WIDTH};
      padding-right: 20px;
    }
  }

  h3 {
  }

  h4 {
  }

  h5 {
  }

  h6 {
  }

  ul {
    padding-top: 16px;
    padding-bottom: 16px;
    list-style-type: disc;
  }

  ul ul {
    padding-left: 28px;
  }

  > ul {
    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin-right: ${LEFT_COLUMN_WIDTH};
      padding-right: 20px;
    }
  }

  ul + p {
    margin-bottom: 0px;
  }

  a {
    color: ${props => props.theme.colors.brandRed};
    cursor: pointer;
    font-weight: 600;
  }

  strong {
    font-weight: 600;
  }

  figure > img {
    float: right !important;
    clear: right !important;
    margin-right: 0px !important;
    width: ${RIGHT_COLUMN_WIDTH};
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px 0px;
    margin: 8px;

    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin: 0px;
    }
  }

  figure > iframe {
    margin-top: 8px;
  }

  img {
    width: 100%;
  }
`;

export default Redactor;
