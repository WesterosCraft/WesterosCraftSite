import React from 'react';
import { Flex } from 'rebass';
import { Section } from './styledHomePage';

const HomePageTemplate = ({ children }) => {
  return (
    <Section as="section">
      <Flex
        flexDirection="column"
        mt={[180]}
        height="100%"
        width="100%"
        sx={{ position: 'absolute', top: 0 }}
      >
        {children}
      </Flex>
    </Section>
  );
};

export default HomePageTemplate;
