import React from 'react';
import { Flex } from 'rebass';
import { Section } from './styledHomePage';

const HomePageTemplate = ({ children, background }) => {
  return (
    <Section
      as="section"
      sx={{
        backgroundImage: `url(${background.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Flex flexDirection="column" justifyContent="center" height="100%">
        {children}
      </Flex>
    </Section>
  );
};

export default HomePageTemplate;
