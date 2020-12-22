import React from 'react';
import { Box, Flex } from 'rebass';
import { ButtonSelector } from '../../organisms/buttonSelector';
import { Redactor } from '../../atoms/redactor/redactor';
import { configProps } from '../../../utility/helpers';
import ScrollAnimation from 'react-animate-on-scroll';

export const Banner = ({ data }) => (
  <Box
    sx={{ position: 'relative' }}
    className="banner"
    {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <Flex
        className="banner-content-card"
        flexDirection={['column', null, 'row']}
        justifyContent={['center', null, 'space-between']}
        alignItems="center"
        bg="white"
        maxWidth={1120}
        minHeight={[240, null, 220]}
        sx={{ position: 'relative', boxShadow: 'inset 0 0 0 4px #333, inset -4px -4px 0 6px #CCC' }}
        mx="auto"
        px={['46px', '80px', null, '100px']}
        py={11}>
        <Box textAlign={['center', null, 'left']} mb={[9, null, 0]} mr={[0, null, 7]}>
          <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
        </Box>
        <ButtonSelector data={data.buttons} />
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
