import React from "react";
// import { FaHeart, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className=" z-50  sticky top-0">
      {/* Top Section: Logo, Dropdown, and Buttons */}
      <div className="flex flex-wrap items-center justify-between p-4 bg-white shadow-sm border-b">
        <div className="flex items-center flex-shrink-0">
          {/* Logo */}
          <img src={"./logo.svg"} alt="NoBroker" className="h-8" />

          {/* Dropdown */}
          <select className="ml-4 text-gray-700 border-none focus:outline-none">
            <option value="pg/hostel">PG/Hostel</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Right Section: Buttons and Icons */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {/* Sign up */}
          <button className="text-gray-700">Sign up</button>

          {/* Log in */}
          <button className="text-gray-700">Log in</button>
        </div>
      </div>

      {/* Bottom Section: Search Bar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-sm border rounded-lg w-full">
        {/* Search Input */}
        <div className="m-auto space-x-2 w-full lg:w-1/2 flex flex-col lg:flex-row">
          <select className="w-full lg:w-auto p-2 border rounded-lg">
            <option value="">Select one city</option>
            <option value="noida">Noida</option>
            <option value="agra">Agra</option>
          </select>
          <input
            type="text"
            placeholder="Search city here"
            className="flex-grow p-2 border rounded-lg w-full lg:w-auto"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg w-full lg:w-auto">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
