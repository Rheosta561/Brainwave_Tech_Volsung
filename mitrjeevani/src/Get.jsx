import React from 'react';
import { NavLink } from 'react-router-dom';

function Get() {
  return (
    <div className="border h-10 w-32 rounded-full mx-auto text-center pt-2 bg-blue-50 border-zinc-900 shadow-md mt-4 hover:bg-blue-900 hover:text-zinc-50 transition-all">
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          `block py-2 px-3 rounded md:p-0 ${
            isActive
              ? 'text-blue-700 dark:text-blue-500'
              : 'text-gray-900  hover:text-blue-700 dark:hover:text-blue-500 -mt-2'
          }`
        }
      >
        Get Started
      </NavLink>
    </div>
  );
}

export default Get;
