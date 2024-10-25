import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-blue-50 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-16 w-20 scale-150 ml-5" alt="Flowbite Logo" />
          </NavLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium mr-4 flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'
                    }`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'
                    }`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chat"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'
                    }`
                  }
                >
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${
                      isActive
                        ? 'text-blue-700 dark:text-blue-500'
                        : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'
                    }`
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
