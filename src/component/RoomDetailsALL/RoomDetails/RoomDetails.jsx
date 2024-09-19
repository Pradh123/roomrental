import React from "react";

const RoomDetails = () => {
  return (
    <div className=" p-10">
      <h1 className="sm:text-[25px] font-semibold  text-center">
        {" "}
        Property details
      </h1>
      <div className="flex flex-col gap-4">
        <label htmlFor="dropdown" className="text-[20px]">
          Apartemrnt Type
        </label>
        <select className="p-2  md:max-w-[300px] xl:max-w-[350px] ">
          <option className="">Select </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <section className="   sm:grid sm:grid-cols-2 mt-4 gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="dropdown" className="text-[20px]">
            BHK Type
          </label>
          <select className="p-2   md:max-w-[300px] xl:max-w-[350px]">
            <option className="">Select </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <main className=" flex flex-wrap justify-between">
          <div className="flex flex-col gap-4">
            <label htmlFor="dropdown" className="text-[20px]">
              Floor
            </label>
            <select className="p-2   md:w-[150px]  xl:w-[200px]">
              <option className="">Select </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="dropdown" className="text-[20px]">
              Total Floor
            </label>
            <select className="p-2   md:w-[150px]  xl:w-[200px]">
              <option className="">Select </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </main>
      </section>
      <section className=" grid grid-cols-2 mt-3 gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="dropdown" className="text-[20px]">
            Property Age
          </label>
          <select className="p-2  md:max-w-[300px] xl:max-w-[350px]  ">
            <option className="">Select </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="dropdown" className="text-[20px]">
            Build Up Area
          </label>
          <select className="p-2  md:max-w-[300px] xl:max-w-[350px] ">
            <option className="">Select </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="dropdown" className="text-[20px]">
            Pricing
          </label>
          <select className="p-2 md:max-w-[300px] xl:max-w-[350px]  ">
            <option className="">Select </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </section>
      <div className="mt-[5vh]  flex justify-center">
        <button className=" bg-red-500 p-2  rounded-md text-white ">
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
