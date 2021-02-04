import React from 'react';

export const Navlink = ({ children, href = '' }) => (
  <a href={href} className="text-base font-medium text-gray-500 hover:text-gray-900">
    {children}
  </a>
);
