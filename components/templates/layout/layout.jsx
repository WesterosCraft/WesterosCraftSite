import React from 'react';
import { Box } from 'rebass';
import Head from 'next/head';
import AnimatedNavbar from '../../organisms/animatedNavbar/animatedNavbar';
import Footer from '../../organisms/footer/footer';

export default ({ children, title = 'This is the default title' }) => (
  <Box>
    <Head>
      <title>{title}</title>
    </Head>
    <AnimatedNavbar />
    <main>{children}</main>
    <Footer />
  </Box>
);
