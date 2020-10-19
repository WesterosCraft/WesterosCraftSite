import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Box } from 'rebass';

import { Header } from '../components/organisms/header';
import { Footer } from '../components/organisms/footer';
import { NAV_QUERY } from '../queries/navQuery.gql';
import { useQuery } from '@apollo/client';
import { initGA, logPageView } from '../utility/analytics';

const Layout = ({ children }) => {
  const { data, loading } = useQuery(NAV_QUERY);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900|Sen:400,700,800&display=swap"
          rel="stylesheet"
        />
        <html lang="en" />
      </Helmet>
      <Header links={data.navData} />
      <Box
        as="main"
        className={`page-wrapper`}
        sx={{
          margin: `0 auto`,
          position: 'relative',
          overflow: 'hidden'
        }}
        pt={[3, null, 10]}
        bg="#FFFFFF">
        {children}
      </Box>
      <Footer links={data.navData} />
    </>
  );
};

export default Layout;
