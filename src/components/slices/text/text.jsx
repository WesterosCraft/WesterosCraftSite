import React from 'react'
import { Redactor } from '../../atoms/redactor/redactor'

export const Text = ({ data }) => <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
