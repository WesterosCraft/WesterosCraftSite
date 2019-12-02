import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../../atoms/button/button';

const AnimatedImageText = ({ input }) => {
  const boxOrder = input.order === 'textFirst';
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <Flex
      flexDirection={['column', null, 'row']}
      justifyContent="center"
      alignItems="center"
      maxWidth={1178}
      mx="auto"
      mt={input.marginTop}
      mb={input.marginBottom}
      pt={input.paddingTop}
      pb={input.paddingBottom}
    >
      <Flex
        order={boxOrder ? '1' : '2'}
        sx={{ position: 'relative', width: ['100%', null, '50%'] }}
        px={10}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 5,
            top: '-80px',
            left: '0',
          }}
        >
          <Text color="textGray" fontSize={144} fontWeight="bold" opacity="0.1">
            {input.sequence}
          </Text>
        </Box>
        <Box
          sx={{ zIndex: 10, position: 'relative' }}
          maxWidth={400}
          mx={['auto', null, 'inherit']}
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

      <Flex order={boxOrder ? '2' : '1'} sx={{ width: ['100%', null, '50%'] }}>
        <Box sx={{ position: 'relative' }} width={458} height={482} ref={ref} mx="auto">
          {inView ? (
            <motion.div
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
              <motion.img
                src={input.image[0].url || ''}
                transition={{ duration: 2.5, type: 'tween' }}
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 1.2 }}
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  overflow: 'hidden',
                  width: '458px',
                  height: '482px',
                  opacity: 0,
                }}
                alt={input.image[0].title}
              />
            </motion.div>
          ) : null}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AnimatedImageText;
