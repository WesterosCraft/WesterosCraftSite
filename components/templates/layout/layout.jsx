import React from 'react';
import { Box } from 'rebass';
import Head from 'next/head';
import Nav from '../../organisms/nav/nav';

export default ({ children, title = 'This is the default title' }) => (
  <Box>
    <Head>
      <title>{title}</title>
    </Head>

    <Nav />

    <main>{children}</main>

    {/* <Footer>Footer</Footer> */}
  </Box>
);
