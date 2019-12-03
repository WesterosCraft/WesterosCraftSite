import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { useInView } from 'react-intersection-observer';
import Button from '../../atoms/button/button';
import { MotionImage, MotionImageContainer } from './styledAnimatedImageText';
import { sizeParser } from '../../../utility/helpers';

const AnimatedImageText = ({ input }) => {
  const textFirst = input.order === 'textFirst';
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <Flex
      flexDirection={['column', null, null, 'row']}
      justifyContent="center"
      alignItems="center"
      maxWidth={1178}
      mx="auto"
      mt={sizeParser(input.marginTop)}
      mb={sizeParser(input.marginBottom)}
      pt={sizeParser(input.paddingTop)}
      pb={sizeParser(input.paddingBottom)}
    >
      <Flex
        order={textFirst ? '1' : ['1', null, null, '2']}
        sx={{ position: 'relative', width: ['100%', null, '50%'] }}
        px={10}
        className="animatedImageText-textColumn"
      >
        <Box
          className="animatedImageText-sequenceContainer"
          sx={{
            position: 'absolute',
            zIndex: 5,
            top: '-80px',
            left: textFirst ? '0' : ['0px', '105px'],
          }}
        >
          <Text color="textGray" fontSize={144} fontWeight="bold" opacity="0.1">
            {input.sequence}
          </Text>
        </Box>
        <Box
          sx={{
            zIndex: 10,
            position: 'relative',
          }}
          ml={textFirst ? 'inherit' : 'auto'}
          mr={['auto', null, 'inherit']}
          maxWidth={400}
          className="animatedImageText-textContainer"
        >
          <Text variant="heading2" color="textColor" fontWeight="bold">
            {input.heading}
          </Text>
          <Text variant="paragraph" color="textColor" mt={10}>
            {input.copy}
          </Text>
          <Button label={input.buttonLabel} variant="link" mt={6} />
        </Box>
      </Flex>

      <Flex
        sx={{
          width: ['100%', null, null, '50%'],
          order: textFirst ? '2' : ['2', null, null, '1'],
        }}
        className="animatedImageText-imageColumn"
      >
        <Box sx={{ position: 'relative' }} width={[335, 458]} height={482} ref={ref} mx="auto">
          {inView ? (
            <MotionImageContainer
              animate={{ height: '100%', opacity: 1 }}
              transition={{ duration: 2, type: 'tween', ease: 'anticipate' }}
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                overflow: 'hidden',
                width: '458px',
                opacity: 0,
              }}
            >
              <MotionImage
                src={input.image[0].url || ''}
                transition={{ duration: 2.5, type: 'tween' }}
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 1.2 }}
                alt={input.image[0].title}
              />
            </MotionImageContainer>
          ) : null}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AnimatedImageText;
