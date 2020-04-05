import styled from '@emotion/styled'

export const Redactor = styled.div`
  /* GLOBAL STYLES */

  img {
    width: 100%;
  }

  figure {
    margin: 0;
  }

  ul {
    max-width: 760px;
    margin: 32px auto;
  }

  ul li {
    font-size: 16px;
  }

  ul .image-list {
    list-style-image: url('sqpurple.gif');
  }

  li + li {
    margin-top: 16px;
  }

  ol {
    list-style: none;
    padding-left: 32px;
  }

  ol li {
    margin: 0;
    padding: 14px 0 14px 40px;
    list-style: none;
    background-image: url('https://westeroscraft.com/web/assets/images/checkmark.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 24px;
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    line-height: 1.25;
    font-weight: normal;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  p {
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Sen', sans-serif;
  }

  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  p,
  a {
    font-family: 'Roboto', sans-serif;
  }

  h3 + h4 {
    margin-top: 22px;
  }

  h3 + h6 {
    margin-top: 16px;
  }

  h5 + p {
    margin-top: 28px;
  }

  h6 + h2 {
    margin-top: 12px;
  }

  h2 + h6 {
    margin-top: 12px;
  }

  /* MOBILE STYLES */

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
  }

  h5 {
    font-size: 18px;
    font-weight: 400;
  }

  h6 {
    font-size: 18px;
    line-height: 1.5;
  }

  p {
    font-size: 16px;
  }

  a {
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    color: #9e1e22;
  }

  a:hover {
    color: #b32227;
  }

  /* TABLET STYLES */

  @media screen and (min-width: 512px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 36px;
    }

    h3 {
      font-size: 32px;
    }

    h4 {
      font-size: 24px;
    }

    h5 {
    }

    h6 {
    }

    p {
    }

    a {
    }

    ol li {
      background-size: 32px;
      font-size: 20px;
    }
  }

  /* LAPTOP STYLES */

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 64px;
    }

    h2 {
      font-size: 48px;
    }

    h3 {
      font-size: 36px;
    }

    h4 {
      font-size: 32px;
    }

    h5 {
      font-size: 24px;
    }

    h6 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }

    a {
      font-size: 16px;
    }

    ul li {
      font-size: 18px;
    }

    ol {
      list-style: none;
      padding-left: 0px;
    }
  }
`
