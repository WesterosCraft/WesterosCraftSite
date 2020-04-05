import React from 'react'
import { Redactor } from '../../atoms/redactor/redactor'
import { Box } from 'rebass'
import { configProps } from '../../../utility/helpers'

export const Text = ({ data }) => (
  <Box px={5} mx="auto" maxWidth={1020} {...(data.spacings && configProps(data.spacings[0]))}>
    <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
  </Box>
)
