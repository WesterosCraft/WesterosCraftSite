import styled from '@emotion/styled';

const Redactor = styled.div`
  * {
    line-height: 1.5;
    font-family: ${props => props.theme.font.primaryFont};
  }

  p {
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 24px;

    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin-right: 50%;
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

    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin-right: 50%;
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

  > ul {
    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      margin-right: 50%;
      padding-right: 20px;
    }
  }

  strong {
    font-weight: 600;
  }

  figure {
    float: right !important;
    clear: right !important;
    margin-right: 0px !important;
  }
`;

export default Redactor;
