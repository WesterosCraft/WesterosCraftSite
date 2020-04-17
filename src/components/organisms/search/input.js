import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { SearchIcon, Form } from './styles'
import { Input } from '@rebass/forms'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      type="text"
      placeholder="Search Wiki"
      mb="44px"
      aria-label="Search"
      onChange={(e) => refine(e.target.value)}
      {...rest}
    />
    <SearchIcon />
  </Form>
))
