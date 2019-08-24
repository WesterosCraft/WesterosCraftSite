import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { RichText } from 'prismic-reactjs';
import { Column } from './styledAnimatedImageText';
import Button from '../../atoms/button/button';

const AnimatedImageText = ({ input }) => {
  const { primary } = input;
  const boxOrder = input.primary.order === 'Text First';
  console.log('animtext', primary);

  return (
    <Flex
      flexDirection="row"
      maxWidth={1024}
      mx="auto"
      mt={primary.margin_top}
      mb={primary.margin_bottom}
    >
      <Column width={1 / 2} sx={{ position: 'relative', order: boxOrder ? '1' : '2' }} px={10}>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 5,
            top: '-80px',
            left: '0',
          }}
        >
          <Text color="textGray" fontSize={144} fontWeight="bold">
            {primary.sequence}
          </Text>
        </Box>
        <Box sx={{ zIndex: 10, position: 'relative' }}>
          <Text variant="heading2" color="white">
            {RichText.asText(primary.title)}
          </Text>
          <Text variant="paragraph" color="white" mt={10} maxWidth={400}>
            {RichText.asText(primary.copy)}
          </Text>
          <Button label={primary.button_label} variant="link" mt={6} />
        </Box>
      </Column>

      <Column width={1 / 2} sx={{ order: boxOrder ? '2' : '1' }} />
    </Flex>
  );
};

export default AnimatedImageText;
