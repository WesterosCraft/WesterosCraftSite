import React, { useState, useRef, useEffect } from 'react';

const DropdownItem = ({ children = '', href = '' }) => (
  <a
    className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    href={href}>
    {children}
  </a>
);

export const Dropdown = ({ dropdownData }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const onClick = () => setOpen(!open);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setOpen(!open);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (open) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
        <span>{dropdownData.title}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </button>
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            {dropdownData.children.map((child) => (
              <DropdownItem key={child.title} href={child.url}>
                {child.title}
              </DropdownItem>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
