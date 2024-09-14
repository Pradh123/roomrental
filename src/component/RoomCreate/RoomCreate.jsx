import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBriefcase,
  FaCog,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const RoomCreate = () => {
  return (
    <div className="flex h-[90vh] border border-red-500 ">
      {/* Side Navigation */}
      <div className="bg-gray-800 text-white w-64  h-[90vh] flex flex-col justify-between">
        <div className="sticky top-16">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <span className="text-lg font-semibold">Side Menu</span>
            <button className="text-gray-400 hover:text-white">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <nav className="mt-4">
            <Link to="" className="flex items-center p-4 hover:bg-gray-700">
              <FaHome className="w-6" />
              <span className="ml-4">Room Details</span>
            </Link>
            <Link
              to="locality-details"
              className="flex items-center p-4 hover:bg-gray-700"
            >
              <FaUsers className="w-6" />
              <span className="ml-4">Locality Details</span>
            </Link>
            <Link
              to="rental-details"
              className="flex items-center p-4 hover:bg-gray-700"
            >
              <FaBriefcase className="w-6" />
              <span className="ml-4">Rental Details</span>
            </Link>
            <Link
              to="image-upload"
              className="flex items-center p-4 hover:bg-gray-700"
            >
              <FaCog className="w-6" />
              <span className="ml-4">Gallery</span>
            </Link>
            <Link
              to="schedule"
              className="flex items-center p-4 hover:bg-gray-700"
            >
              <FaCog className="w-6" />
              <span className="ml-4">Schedule</span>
            </Link>
          </nav>
          <div className="flex justify-around p-4  pt-14 mt-9 border-t border-gray-700">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RoomCreate;
