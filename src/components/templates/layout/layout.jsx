import React from 'react';
import { Box } from 'rebass';
import Navbar from '../../organisms/navbar/navbar';
import Footer from '../../organisms/footer/footer';

export default ({ children, title = 'This is the default title', footerImage }) => (
  <Box>
    <Navbar />
    <main style={{ position: 'relative' }}>{children}</main>
    <Footer footerImage={footerImage} />
  </Box>
);
