import React, { useState, useRef, useEffect } from 'react';
import { FaCrow, FaDiscord, FaInfoCircle, FaPencilAlt, FaTshirt } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { RiHandCoinFill } from 'react-icons/ri';
import { GiStoneBlock } from 'react-icons/gi';

const iconProps = 'flex-shrink-0 h-6 w-6 text-red-700';

const iconMap = {
  crow: <FaCrow className={iconProps} />,
  discord: <FaDiscord className={iconProps} />,
  donate: <RiHandCoinFill className={iconProps} />,
  forums: <IoMdChatbubbles className={iconProps} />,
  progress: <GiStoneBlock className={iconProps} />,
  about: <FaInfoCircle className={iconProps} />,
  apply: <FaPencilAlt className={iconProps} />,
  merch: <FaTshirt className={iconProps} />
};

const DropdownItem = ({ children = '', href = '', description, icon }) => (
  <a href={href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
    {iconMap[icon]}
    <div className="ml-4">
      <p className="text-base font-medium text-gray-900">{children}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
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
    <div className="dropdown relative">
      <button
        onClick={onClick}
        type="button"
        className="group bg-white dark:bg-gray-900 rounded-md text-gray-500 dark:text-gray-200 dark:hover:text-gray-50 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span>{dropdownData.title}</span>

        <svg
          className="ml-2 h-5 w-5   text-gray-400 dark:text-gray-200 group-hover:text-gray-500 dark:group-hover:text-gray-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div
          ref={dropdownRef}
          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {dropdownData.children.map((child) => (
                <DropdownItem
                  key={child.title}
                  href={child.url}
                  description={child.description}
                  icon={child.icon}>
                  {child.title}
                </DropdownItem>
              ))}
            </div>
            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              <div className="flow-root">
                <a
                  href="/"
                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-3">Watch Demo</span>
                </a>
              </div>

              <div className="flow-root">
                <a
                  href="/"
                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="ml-3">Contact Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
