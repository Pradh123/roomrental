import React from "react";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const { setOwenerDetailsPopUp, OwenerDetailsPopUp } = useContext(UserContext);

  return (
    <header className="z-50 sticky top-0  h-[10vh]  border border-blue-500">
      {/* Top Section: Logo, Dropdown, and Buttons */}
      <div className="flex flex-wrap items-center justify-between p-4 bg-white shadow-sm border-b">
        <div className="flex items-center flex-shrink-0">
          {/* Logo */}
          <Link to={"/"}>
            <img src={"./logo.svg"} alt="NoBroker" className="h-8" />
          </Link>

          {/* Dropdown */}
          <select className="ml-4 text-gray-700 border-none focus:outline-none">
            <option value="pg/hostel">PG/Hostel</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Right Section: Buttons and Icons */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {/* Sign up */}
          <Link
            to="/admin/user"
            className=" bg-[#009587] px-4 mx-8 py-1 rounded-md hover:bg-[#007a6f] "
          >
            Post Your Room
          </Link>
          {/* <button
            className="text-gray-700 cursor-pointer"
            onClick={() => {
              setOwenerDetailsPopUp(true);
            }}
          >
            Sign up
          </button> */}

          {/* Log in */}
          {/* <button
            className="text-gray-700 cursor-pointer"
            onClick={() => {
              setOwenerDetailsPopUp(true);
            }}
          >
            Log in
          </button> */}
        </div>
      </div>

      {/* Bottom Section: Search Bar */}
    </header>
  );
};

export default Header;
