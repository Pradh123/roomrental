import { HiExternalLink } from "react-icons/hi";
import { FaMapMarkerAlt, FaUserGraduate, FaCalendarAlt } from "react-icons/fa";
import { GetOwnerDetails } from "../Buttons/Buttons";
import img1 from './room.jpeg'
export const RoomCard = () => {
  return (
    <div className="flex flex-col border border-gray-300  shadow-md  mt-4 ">  
        {/* Title and External Link */}
        <div className="  bg-slate-100">
        <div className="flex flex-col px-4 my-3">
          <div className="flex items-center gap-1 my-3 text-lg font-semibold">
            <p>PG For Girls In Sector 51</p>
            <HiExternalLink className="text-blue-500 text-lg" />
          </div>
          <div className=" flex gap-2">
            {/* Location */}
            <p className="text-gray-500 text-sm flex items-center mb-3">
             opposite Ravi Women Hospital
              Near HP petrol pump A48, Sector 51
              <FaMapMarkerAlt className="mx-1 " /> 
            </p>
            <a href="#" className="text-blue-500 text-sm underline">
              Explore Nearby
            </a>
          </div>
        </div>
        </div>
        <hr />
        {/* Pricing and Room Info */}
       <div className="bg-white">
       <div className="flex  justify-around my-4 text-center text-sm">
          <div>
            <p className="text-xl font-semibold">₹9,000</p>
            <p className="text-gray-500">Deposit</p>
          </div>
          <div className="w-0.5 bg-slate-300"></div>
          <div>
            <p className="text-xl font-semibold">Single and Shared</p>
            <p className="text-gray-500">Room Type Available</p>
          </div>
          <div className="w-0.5 bg-slate-300"></div>
          <div>
            <p className="text-xl font-semibold">₹9,000</p>
            <p className="text-gray-500">Rent/Month</p>
          </div>
        </div>
       </div>
     
      <hr />
      {/* Lower Section */}
      <div className="flex bg-gray-50">
        {/* Image Section */}
        <div className="w-1/3">
          <img
            src={img1}
            alt="Room Image"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Details Section */}
        <div className="flex-1 flex flex-col justify-between p-4 bg-white">
          <div className="w-full flex border  border-gray-200 flex-col gap-2">
            {/* Tenant Preference and Post Date */}
            <div className="m-1 border">
            <div className="flex mx-3 my-2">
              <div className="flex items-center gap-2 w-1/2">
                <FaUserGraduate className="text-gray-600" />
                <div className=" flex flex-col gap-1 mx-2">
                  <p className="font-semibold">Any</p>
                  <p className="text-gray-500 text-sm">Preferred Tenants</p>
                </div>
              </div>
              <div className=" w-0.5 bg-slate-200"></div>
              <div className="flex items-center gap-2 ml-4 w-1/2">
                <FaCalendarAlt className="text-gray-600" />
                <div  className=" flex flex-col gap-1 mx-2">
                  <p className="font-semibold">14 Days Ago</p>
                  <p className="text-gray-500 text-sm">Posted On</p>
                </div>
              </div>
            </div>
            <hr />
            {/* Food and Gate Closing Info */}
            <div className="flex mx-3 my-2">
              <div className="flex items-center gap-2 w-1/2">
                <div className="text-gray-600">🍴</div>
                <div  className=" flex flex-col gap-1 mx-2">
                  <p className="font-semibold">Breakfast, Dinner</p>
                  <p className="text-gray-500 text-sm">Food Facility</p>
                </div>
              </div>
              <div className=" w-0.5 bg-slate-200"></div>
              <div className="flex items-center gap-2 w-1/2 ml-4">
                <div className="text-gray-600">⏰</div>
                <div  className=" flex flex-col gap-1 mx-2">
                  <p className="font-semibold">Not Provided</p>
                  <p className="text-gray-500 text-sm">Gate Closing Time</p>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          {/* Get Owner Details Button */}
          <div className="w-full mt-4">
            <GetOwnerDetails className="bg-red-500 text-white py-2 w-full rounded-md text-center font-semibold" />
          </div>
        </div>
      </div>
    </div>
  );
};
