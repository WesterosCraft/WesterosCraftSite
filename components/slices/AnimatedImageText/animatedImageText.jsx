import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { RichText } from 'prismic-reactjs';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Column } from './styledAnimatedImageText';
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
      <Column
        width={[1, null, 1 / 2]}
        sx={{ position: 'relative', order: boxOrder ? '1' : '2' }}
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
          <Text color="textGray" fontSize={144} fontWeight="bold">
            {input.sequence}
          </Text>
        </Box>
        <Box sx={{ zIndex: 10, position: 'relative' }}>
          <Text variant="heading2" color="white">
            {input.heading}
          </Text>
          <Text variant="paragraph" color="white" mt={10} maxWidth={400}>
            {input.copy}
          </Text>
          <Button label={input.buttonLabel} variant="link" mt={6} />
        </Box>
      </Column>

      <Column width={[1, null, 1 / 2]} sx={{ order: boxOrder ? '2' : '1' }}>
        <Box sx={{ position: 'relative' }} width={458} height={482} ref={ref}>
          {inView ? (
            <motion.div
              animate={{ height: 482, opacity: 1 }}
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
      </Column>
    </Flex>
  );
};

export default AnimatedImageText;
