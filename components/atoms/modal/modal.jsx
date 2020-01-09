import React from 'react';
import Popup from 'reactjs-popup';

const Modal = props => (
  <Popup
    modal
    contentStyle={{
      width: 'fit-content',
      borderRadius: '4px',
    }}
    {...props}
  >
    {props.children}
  </Popup>
);

export default Modal;
