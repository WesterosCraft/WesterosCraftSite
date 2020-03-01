import React from 'react';
import { Text } from 'rebass';
import { sizeParser } from '../../../utility/helpers';

const TextSlice = ({ input }) => {
  return (
    <Text
      variant={input.variant}
      fontWeight={input.fontWeight}
      textAlign={input.textAlign}
      mt={sizeParser(input.marginTop)}
      mb={sizeParser(input.marginBottom)}
      pt={sizeParser(input.paddingTop)}
      pb={sizeParser(input.paddingBottom)}
    >
      {input.text}
    </Text>
  );
};

export default TextSlice;
