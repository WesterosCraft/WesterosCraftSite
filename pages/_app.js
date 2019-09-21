import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import { ApolloProvider } from '@apollo/react-hooks';
import theme from '../theme/theme';
import withApollo from '../lib/apollo';
import PageWrapper from '../components/atoms/pageWrapper/pageWrapper';

class MyApp extends App {
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
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
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
          {/* <PageWrapper> */}
            <Component {...pageProps} />{' '}
          {/* </PageWrapper>{' '} */}
        </ThemeProvider>{' '}
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
