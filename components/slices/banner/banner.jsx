import React from 'react';
import { Box, Flex } from 'rebass';
import { ButtonSelector } from '../../organisms/buttonSelector';
import { Redactor } from '../../atoms/redactor/redactor';
import ScrollAnimation from 'react-animate-on-scroll';
import { SanityBlockContent } from '../../atoms/blockContent';

export const Banner = ({ data: { copy, buttonBuilder } }) => (
  <Box sx={{ position: 'relative' }} className="banner">
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <Flex
        className="banner-content-card"
        flexDirection={['column', null, 'row']}
        justifyContent={['center', null, 'space-between']}
        alignItems="center"
        bg="light.background"
        maxWidth={1120}
        minHeight={[240, null, 220]}
        sx={{
          position: 'relative',
          boxShadow:
            'inset 0 0 0 4px var(--theme-colors-text, #333333), inset -4px -4px 0 6px var(--theme-colors-gray-400, #cccccc)'
        }}
        mx="auto"
        px={['46px', '80px', null, '100px']}
        py={11}>
        <Box textAlign={['center', null, 'left']} mb={[9, null, 0]} mr={[0, null, 7]}>
          <Redactor>
            <SanityBlockContent blocks={copy.copy} />
          </Redactor>
        </Box>
        {buttonBuilder && buttonBuilder.length > 0 && <ButtonSelector buttons={buttonBuilder} />}
      </Flex>
    </ScrollAnimation>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        bottom: 0,
        height: 85,
        zIndex: -1,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        transform: 'translateY(-50%)'
      }}
      bg="gold"
      width="100vw"
    />
  </Box>
);
