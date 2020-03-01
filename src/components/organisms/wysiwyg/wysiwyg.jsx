import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Redactor from '../../atoms/redactor/redactor';

const Wysiwyg = ({ data }) => {
  const [text, setText] = useState(data);

  const handleChange = value => {
    setText(value);
  };
  return (
    <Redactor>
      <ReactQuill theme="snow" value={text} onChange={handleChange} />
    </Redactor>
  );
};

export default Wysiwyg;
