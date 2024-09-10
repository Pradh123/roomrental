import React from "react";
import {
  FaHome,
  FaCamera,
  FaMapMarkerAlt,
  FaHeart,
  FaUserTie,
  FaCalendarAlt,
  FaCar,
  FaClock,
  FaUtensils,
  FaKey,
} from "react-icons/fa";
const RoomPage = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center">
          <FaHome className="text-2xl mr-2" />
          <div>
            <h1 className="text-xl font-bold">
              PG For Boys In Aims Golf Avenue 1
            </h1>
            <p className="text-gray-600">
              Sec 52 Metro station, Aims Golf Avenue 1
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold">₹15,000</p>
          <p className="text-gray-600">Monthly Rent</p>
          <p className="text-xl font-bold">₹30,000</p>
          <p className="text-gray-600">Deposit</p>
          <button className="bg-red-500 text-white px-4 py-2 mt-2">
            Get Owner Details
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          Home / PG in Noida / PG in Sector 75 / PG for Boys in Sector 75 /
          Property Details
        </p>
      </div>
      <div className="mt-4 flex">
        <div className="w-2/3">
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Room image"
              className="w-full h-auto"
            />
            <button className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 flex items-center">
              <FaCamera className="mr-2" /> Photos
            </button>
            <button className="absolute top-4 left-24 bg-gray-800 text-white px-4 py-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Location
            </button>
            <button className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 flex items-center">
              <FaHeart className="mr-2" /> Shortlist
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <img
              src="https://placehold.co/300x200"
              alt="Room image"
              className="w-full h-auto"
            />
            <img
              src="https://placehold.co/300x200"
              alt="Room image"
              className="w-full h-auto"
            />
            <div className="relative">
              <img
                src="https://placehold.co/300x200"
                alt="Room image"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
                +6
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 pl-4">
          <div className="border p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <FaUserTie className="mr-2" /> Professional
              </span>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" /> Aug 11, 2024
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <FaCar className="mr-2" /> Car
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2" /> Immediately
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <FaUtensils className="mr-2" /> Not Available
              </span>
              <span className="flex items-center">
                <FaKey className="mr-2" /> Not Provided
              </span>
            </div>
            <button className="bg-red-500 text-white w-full py-2 mt-4">
              Get Owner Details
            </button>
          </div>
          <div className="border p-4 mt-4">
            <p className="text-gray-600">
              Report what was not correct in this property
            </p>
            <div className="flex justify-between mt-2">
              <button className="border px-4 py-2">Listed by Broker</button>
              <button className="border px-4 py-2">Rented Out</button>
              <button className="border px-4 py-2">Wrong Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
