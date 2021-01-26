import React from 'react';
import { Box } from 'rebass';

export const Spacer = ({ data }) => (
  <Box width={1} height={[data.mobile, data.tablet, data.desktop]} />
);
