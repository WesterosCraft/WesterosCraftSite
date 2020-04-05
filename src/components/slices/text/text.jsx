import React from 'react'
import { Redactor } from '../../atoms/redactor/redactor'
import { Box } from 'rebass';

export const Text = ({ data }) => (<Box px={5}>
    <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
    </Box>)
