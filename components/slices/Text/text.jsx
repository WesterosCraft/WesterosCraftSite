import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSlice = ({ input }) => {
  console.log(input);
  return <div>{RichText.render(input.primary.text)}</div>;
};

export default TextSlice;
