import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import { Form } from './styles';
import { Input } from '@rebass/forms';
import { GoSearch } from 'react-icons/go';

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      type="text"
      placeholder="Search Wiki"
      mb="44px"
      aria-label="Search"
      onChange={(e) => e.target.value.length >= 3 && refine(e.target.value)}
      {...rest}
    />
    <GoSearch color="#666666" style={{ position: 'absolute', right: 16, top: 16 }} />
  </Form>
));
