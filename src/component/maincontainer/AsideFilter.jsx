import React from 'react';

const AsideFilter = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full sticky top-36  ">
      {/* Header Section */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-lg font-semibold text-green-600'>Filter</h1>
        <button className="text-sm text-blue-500 hover:underline">Reset</button>
      </div>
      <div className='w-full h-1 bg-green-600 mb-4 rounded'></div>

      {/* PG for Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">PG for</h2>
        <div className='flex gap-4'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name='pg' className="text-green-600 focus:ring-green-500"/>
            <span>Male</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name='pg' className="text-green-600 focus:ring-green-500"/>
            <span>Female</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name='pg' className="text-green-600 focus:ring-green-500"/>
            <span>Anyone</span>
          </label>
        </div>
      </div>

      {/* Room Type Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">Room Type</h2>
        <div className='grid grid-cols-2 gap-4'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='room_type' className="text-green-600 focus:ring-green-500"/>
            <span>Single</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='room_type' className="text-green-600 focus:ring-green-500"/>
            <span>Double</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='room_type' className="text-green-600 focus:ring-green-500"/>
            <span>Triple</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='room_type' className="text-green-600 focus:ring-green-500"/>
            <span>Four</span>
          </label>
        </div>
      </div>

      {/* Rent Range Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">Rent Range: 0 to 90k</h2>
        <input 
          type="range"
          min={0}
          max={90000}
          className="w-full accent-green-600 cursor-pointer"
        />
      </div>

      {/* Preferred For Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">Preferred For</h2>
        <div className='flex gap-4'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='preferred_for' className="text-green-600 focus:ring-green-500"/>
            <span>Students</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='preferred_for' className="text-green-600 focus:ring-green-500"/>
            <span>Professionals</span>
          </label>
        </div>
      </div>

      {/* Food Included Section */}
      <div className="mb-4">
        <h2 className="text-md font-medium mb-2">Food Included</h2>
        <div className='grid grid-cols-2 gap-4'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='food_included' className="text-green-600 focus:ring-green-500"/>
            <span>Breakfast</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='food_included' className="text-green-600 focus:ring-green-500"/>
            <span>Lunch</span>
          </label>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input type="checkbox" name='food_included' className="text-green-600 focus:ring-green-500"/>
            <span>Dinner</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AsideFilter;
