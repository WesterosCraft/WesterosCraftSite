import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Text } from 'rebass';

const TextSlice = ({ input }) => {
  const { primary } = input;
  return (
    <Text
      variant={primary.text[0].type}
      textAlign={primary.alignment}
      color={primary.color}
      mt={primary.margin_top}
      mb={primary.margin_bottom}
    >
      {RichText.asText(primary.text)}
    </Text>
  );
};

export default TextSlice;
