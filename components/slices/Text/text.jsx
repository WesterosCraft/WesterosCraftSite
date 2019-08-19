import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Text } from 'rebass';

const TextSlice = ({ input }) => {
  console.log(input);
  return (
    <Text variant={input.primary.text[0].type} sx={{ textAlign: input.primary.alignment }}>
      {RichText.asText(input.primary.text)}
    </Text>
  );
};

export default TextSlice;
