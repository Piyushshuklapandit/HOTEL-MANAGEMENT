import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';

export const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const linkStyle = ({ isActive }) =>
    `hover:underline transition-all ${
      isActive ? 'font-semibold underline' : ''
    }`;

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md">
      {/* Brand Name */}
      <NavLink to="/" className="text-2xl font-bold text-white">
        Gkp Resident
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-white relative">
        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>
        <NavLink to="/login" className={linkStyle}>
          Login
        </NavLink>
        <NavLink to="/signup" className={linkStyle}>
          Signup
        </NavLink>

        {/* Dropdown on Hover */}
        <div
          className="relative"
          onClick={() => setShowOptions((prev) => !prev)}

          // on={() => setShowOptions(false)}
        >
          <AlignJustify className="cursor-pointer" />

          {showOptions && (
          <div className="absolute right-0 top-8 w-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-lg rounded p-2 space-y-2 z-50 flex flex-col">



              <NavLink to="/room" className="w-full text-left text-black hover:bg-gray-100 px-4 py-2 rounded text-base">
                Room 
              </NavLink>
              <NavLink to="/restaurant" className="w-full text-left text-black hover:bg-gray-100 px-4 py-2 rounded text-base">
                Restaurant
              </NavLink>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
