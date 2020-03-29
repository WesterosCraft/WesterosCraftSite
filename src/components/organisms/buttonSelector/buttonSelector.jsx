import React from 'react'
import { Button } from '../../atoms/button'

export const ButtonSelector = ({ data }) =>
  data.map((button) => <Button variant={button.variant}>{button.buttonText}</Button>)
