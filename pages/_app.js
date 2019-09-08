import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import theme from '../theme/theme';
import Navigation from '../components/organisms/navigation/navigation';
import { client } from '../prismic-configuration';

export default class MyApp extends App {
  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Cinzel:400,700|Montserrat:400i,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
    );
  }

  render() {
    const { Component, pageProps, nav } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            * {
              font-family: ${theme.font.secondaryFont};
            }
            body,
            html {
              background-color: ${theme.colors.backgroundColor};
              height: 100%;
              margin: 0;
              padding: 0;
            }
            h1 {
              ${theme.text.heading1}
            }
            h2 {
              ${theme.text.heading2}
            }
          `}
        />{' '}
        {this.renderHead()}{' '}
        <>
          <Navigation nav={nav} /> <Component {...pageProps} />{' '}
        </>{' '}
      </ThemeProvider>
    );
  }
}

MyApp.getInitialProps = async ({ Component, router, ctx }) => {
  try {
    const nav = await client.getSingle('navigation');
    console.log(nav);
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
      nav,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};
