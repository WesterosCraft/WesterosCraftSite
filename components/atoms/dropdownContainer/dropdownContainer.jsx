import React from 'react';
import { Card } from 'rebass';

const DropdownContainer = ({ children, className, ...props }) => {
  return (
    <Card
      {...props}
      className={`dropdown-container ${className} `}
      height="100px"
      sx={{
        ...props.sx,
        position: 'absolute',
        borderRadius: '4px',
        boxShadow:
          '0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3), 0 -18px 60px -10px rgba(0,0,0,.025)',
      }}
    >
      {children}
    </Card>
  );
};

export default DropdownContainer;
