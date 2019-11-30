import React from 'react';
import { Box } from 'rebass';
import Head from 'next/head';
// import Nav from '../../organisms/nav/nav';
import AnimatedNavbar from '../../organisms/animatedNavbar/animatedNavbar';

export default ({ children, title = 'This is the default title' }) => (
  <Box>
    <Head>
      <title>{title}</title>
    </Head>
    <AnimatedNavbar />
    {/* <Nav /> */}

    <main>{children}</main>

    {/* <Footer>Footer</Footer> */}
  </Box>
);
