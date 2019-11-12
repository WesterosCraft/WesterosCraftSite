import React from 'react';
import { Flex } from 'rebass';
import { Section } from './styledHomePage';

const HomePageTemplate = ({ children, background }) => {
  return (
    <Section as="section">
      <Flex
        flexDirection="column"
        justifyContent="center"
        height="100%"
        sx={{ position: 'absolute', top: 0 }}
      >
        {children}
      </Flex>
    </Section>
  );
};

export default HomePageTemplate;
