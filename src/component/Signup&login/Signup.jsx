import "./module.css";
import { useEffect } from "react";
export const Signup = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className=" signUpform   ">
      <div
        className="  sm: max-w-[30%]  min-w-[200px]   min-h-[300px]
      sm:max-h-[400px] bg-white p-3 rounded-md"
      >
        <form action="Sumbit" className=" flex  flex-col ">
          <h1 className="text-[25px] text-center font-semibold"> Sign Up </h1>
          <div className=" formitemlabel">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="formiteminput"
            />
          </div>
          <div className=" formitemlabel">
            <label htmlFor="name">Email:</label>
            <input
              type="text"
              placeholder="xyz@gmail.com"
              className="formiteminput"
            />
          </div>
          <div className=" formitemlabel">
            <label htmlFor="name" className="text-nowrap">
              Phone Number:
            </label>
            <input
              type="text"
              placeholder="0000000000"
              className="formiteminput"
            />
          </div>
          <div className=" formitemlabel">
            <label htmlFor="name" className="text-nowrap">
              Address:
            </label>
            <input
              type="text"
              placeholder="Street-1234"
              className="formiteminput"
            />
          </div>
          <div className=" formitemlabel">
            <label htmlFor="name" className="text-nowrap">
              Password:
            </label>
            <input
              type="text"
              placeholder="set password "
              className="formiteminput"
            />
          </div>
          <button className=" bg-red-500 p-3 rounded-lg mt-4 hover:bg-red-400 cursor-pointer">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};
