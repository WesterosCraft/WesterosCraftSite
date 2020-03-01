import React from 'react';
import Popup from 'reactjs-popup';
import { MdClose } from 'react-icons/md';

const Modal = props => (
  <Popup
    modal
    contentStyle={{
      width: 'fit-content',
      borderRadius: '4px',
      overflowY: 'scroll',
      height: '100%',
      maxHeight: '90vh',
      maxWidth: '90vw',
    }}
    {...props}
  >
    {close => (
      <>
        <MdClose onClick={close} size={24} style={{ position: 'absolute', top: 12, right: 12, cursor: 'pointer' }} />
        {props.children}
      </>
    )}
  </Popup>
);

export default Modal;
