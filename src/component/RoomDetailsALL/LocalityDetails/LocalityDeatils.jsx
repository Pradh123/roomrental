import React from 'react'
import GoogleMap from './GoogleMap/GoogleMap'

const LocalityDeatils = () => {
  return (
    <div className=" px-10">
      <div className='text-center'>
        <h1 className=' font-bold text-2xl'>Locality Details</h1>
      </div>
      <div className='flex mt-10 '>
        <div className='flex flex-col flex-1 gap-4'>
          <label htmlFor="locality" className="text-[20px] "> Select  City</label>
          <select name="" id="locality" className="p-2 md:max-w-[300px] w-56 xl:max-w-[350px] ">
            <option className=''> select city</option>
            <option value="noida">Noida</option>
            <option value="agra">Agra</option>
          </select>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
        <label htmlFor="locality" className="text-[20px] ">Your Address</label>
        <input type="text" className="p-2 md:max-w-[300px] w-56 xl:max-w-[350px] " placeholder='Enter Your Address'/>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
        <label htmlFor="locality" className="text-[20px] ">NearBy Famous Place</label>
        <input type="text" className="p-2 md:max-w-[300px] w-56 xl:max-w-[350px] " placeholder='Enter NearBy Famous Place'/>
        </div>
      </div>
      <div className='mt-8 text-2xl'>
        <h1>Upload Room Location Map</h1>
        <div>
          <GoogleMap/>
        </div>
      </div>
      <div className="mt-[5vh]  flex justify-center">
        <button className=" bg-red-500 p-2  rounded-md text-white ">
          Save & Continue
        </button>
      </div>
    </div>
  )
}

export default LocalityDeatils