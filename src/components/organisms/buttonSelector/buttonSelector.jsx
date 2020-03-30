import React from 'react'
import { Button } from '../../atoms/button'

export const ButtonSelector = ({ data }) =>
  data.map((button, index) => (
    <Button variant={button.variant} key={index}>
      {button.buttonText}
    </Button>
  ))
