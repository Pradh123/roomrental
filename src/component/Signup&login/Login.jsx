import { useEffect } from "react";
export const Login = () => {
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
          <h1 className="text-[25px] text-center font-semibold"> Login</h1>

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
              Password:
            </label>
            <input
              type="text"
              placeholder="#########"
              className="formiteminput"
            />
          </div>

          <button className=" bg-red-500 p-3 rounded-lg mt-4 hover:bg-red-400 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
