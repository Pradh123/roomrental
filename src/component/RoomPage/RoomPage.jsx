import React from "react";
import { UserContext } from "../../Context/Context";
import { useContext, useEffect } from "react";
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
import { OwnerDetails } from "../Signup&login/OwnerDetails";
<FaHome className="text-2xl mr-2" />;
const RoomPage = () => {
  const { setOwenerDetailsPopUp, OwenerDetailsPopUp } = useContext(UserContext);
  return (
    <div>
      <div className="  bg-white mx-10">
        {OwenerDetailsPopUp && <OwnerDetails />}
        <div className="flex items-center justify-between border mt-3">
          <div className="flex-4 px-6 py-5 border">
            <FaHome className="text-2xl mr-2" />
            <h2>PG</h2>
          </div>
          <div className="flex-1 py-5 border px-2">
            <h2 className="font-bold">PG For Boys In Aims Golf Avenue 1</h2>
            <p>sec 52 metro station , Aims Golf Avenue 1</p>
          </div>
          <div className="flex-3 px-6 py-5">
            <h2 className="font-bold">15000</h2>
            <p>Monthly Rent</p>
          </div>
          <div className="flex-3 border px-6 py-5">
            <h2 className="font-bold">30000</h2>
            <p>Deposite</p>
          </div>
          <div className="flex-3 px-6 py-5">
            <button
              onClick={() => setOwenerDetailsPopUp(true)}
              className=" cursor-pointer bg-[#fd3752] px-2 py-2"
            >
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
        <div className="mt-4 flex h-full">
          <div className="w-2/3">
            <div className="relative flex">
              <div>
                <img
                  src="https://placehold.co/600x400"
                  alt="Room image"
                  className="w-full h-auto"
                />

                <button className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 flex items-center">
                  <FaCamera className="mr-2" /> Photos
                </button>
                <button className="absolute top-4 left-24 bg-gray-800 text-white mx-10 px-4 py-2 flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Location
                </button>
              </div>
              <div className="flex flex-col mx-2">
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
          </div>
          <div className="w-1/3 pl-4">
            <div className="border p-4">
              <div className="border">
                <div className="flex justify-between items-center border-b mb-2">
                  <div className="flex items-center border-r px-2 py-3 w-1/2">
                    <FaUserTie className="mr-2" />
                    <div className="px-2">
                      <p>Professional</p>
                      <p>Prefered Tenant</p>
                    </div>
                  </div>
                  <div className="flex items-center px-2 py-3 w-1/2">
                    <FaCalendarAlt className="mr-2" />
                    <div className="mr-2">
                      <p>Aug 11, 2024</p>
                      <p>Posted On</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b mb-2">
                  <div className="flex items-center border-r px-2 py-3 w-1/2">
                    <FaCar className="mr-2" />
                    <div className="px-2">
                      <p> Car</p>
                      <p>Parking</p>
                    </div>
                  </div>
                  <div className="flex items-center px-2 py-3 w-1/2">
                    <FaClock className="mr-2" />
                    <div className="px-2">
                      <p> Immediately</p>
                      <p>Possesion</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center border-r px-2 py-3 w-1/2">
                    <FaUtensils className="mr-2" />
                    <div className=" px-2">
                      <p> Not Available</p>
                      <p>Food Facility</p>
                    </div>
                  </div>
                  <div className="flex items-center px-2 py-3 w-1/2">
                    <FaKey className="mr-2" />
                    <div className=" px-2">
                      <p> Not Provided</p>
                      <p>Gate Closing Time</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOwenerDetailsPopUp(true)}
                className="bg-red-500 cursor-pointer text-white w-full py-2 mt-4"
              >
                Get Owner Details
              </button>
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
      </div>
      <div className="bg-slate-50 flex mx-10 mt-2">
        <div className="flex flex-col gap-6 w-2/3">
          <div className=" border bg-white flex flex-col py-8 gap-5 px-4">
            <p className=" underline decoration-red-700 text-xl font-bold underline-offset-8">
              Double Sharing Room Details
            </p>
            <div className=" flex">
              <div className="flex w-1/2 gap-4">
                <p>Rent for double Occupancy</p>
                <p className=" font-semibold">₹ 8,000/M</p>
              </div>
              <div className="flex w-1/2 gap-4">
                <p>Rent for double Occupancy</p>
                <p className=" font-semibold">₹ 8,000/M</p>
              </div>
            </div>
          </div>
          <div className=" border bg-white flex flex-col py-8 gap-5 px-4">
            <p className=" underline decoration-red-700 text-xl font-bold underline-offset-8">
              Triple Sharing Room Details
            </p>
            <div className=" flex">
              <div className="flex w-1/2 gap-4">
                <p>Rent for double Occupancy</p>
                <p className=" font-semibold">₹ 8,000/M</p>
              </div>
              <div className="flex w-1/2 gap-4">
                <p>Rent for double Occupancy</p>
                <p className=" font-semibold">₹ 8,000/M</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3 border bg-white ml-4">
          
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
