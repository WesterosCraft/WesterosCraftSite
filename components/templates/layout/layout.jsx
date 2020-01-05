import React from 'react';
import { Box } from 'rebass';
import Head from 'next/head';
import Navbar from '../../organisms/navbar/navbar';
import Footer from '../../organisms/footer/footer';

export default ({ children, title = 'This is the default title' }) => (
  <Box>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </Box>
);
