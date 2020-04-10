import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { SearchIcon, Form } from './styles'

import { Input } from '@rebass/forms'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      mb="44px"
      type="text"
      placeholder="Search Wiki"
      aria-label="Search"
      onChange={(e) => refine(e.target.value)}
      {...rest}
    />
    <SearchIcon />
  </Form>
))
