import React, { useState } from 'react';
import { Dropdown } from '../dropdown';
import { Navlink } from '../navlink';
import navData from './navData.json';

export const Navbar = ({ navLinks = navData }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a
            href="/"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            WesterosCraft
          </a>
          <button
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!openNav && (
                <path
                  x-show="!open"
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              )}
              {openNav && (
                <path
                  x-show="open"
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              )}
            </svg>
          </button>
        </div>
        <nav
          className={` ${
            openNav ? 'flex' : 'hidden'
          } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
          {navLinks.map((link) =>
            link.children && link.children.length > 1 ? (
              <Dropdown key={link.title} dropdownData={link} />
            ) : (
              <Navlink key={link.title} href={link.url}>
                {link.title}
              </Navlink>
            )
          )}
        </nav>
      </div>
    </div>
  );
};
