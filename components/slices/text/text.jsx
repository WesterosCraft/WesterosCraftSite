import React from 'react';
import { Redactor } from '../../atoms/redactor/redactor';
import { Box } from 'rebass';
import { configProps } from '../../../utils/helpers';

export const Text = ({ data, wiki }) => (
  <Box
    className="text"
    px={wiki ? 0 : 5}
    mx="auto"
    maxWidth={1020}
    {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
    <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
  </Box>
);
