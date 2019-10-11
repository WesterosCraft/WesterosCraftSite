import React from 'react';
import { Flex } from 'rebass';
import { Section, Background } from './styledHomePage';

const HomePageTemplate = ({ children, background }) => {
  return (
    <Section as="section">
      <Background
        width={1}
        height="100%"
        sx={{
          backgroundImage: `url(${background.url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      />
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
