import { CacheProvider } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme/theme';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../../lib/apolloClient';

import 'react-vertical-timeline-component/style.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';
import { globalStyles } from '../theme/global';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          {globalStyles}
          <Component {...pageProps} />
        </CacheProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
