import React, { useState } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const UserAdminForm = () => {
  const [formType, setFormType] = useState("signup");
  const [showPass, setShowPass] = useState(false);
  const [navigateBool,setNavigateBool]=useState(false);
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
 e.preventDefault();
 setNavigateBool(true)
  }
  if(navigateBool){
    navigate('/admin/create-room')
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          {formType === "signup" && (
            <h2 className="text-2xl font-semibold text-[#fd3752]">
              Registration Form
            </h2>
          )}
          {formType === "signin" && (
            <h2 className="text-2xl font-semibold text-[#fd3752]">
              Login Form
            </h2>
          )}
        </div>
        <form>
          {formType === "signup" && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
            />
          </div>
          {formType === "signup" && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Country"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
              />
            </div>
          )}
          {formType === "signup" && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
              />
            </div>
          )}
          <div className="mb-4 relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-[#fd3752]"
            />
            {showPass ? (
              <FaEye
                onClick={() => setShowPass(false)}
                className="absolute right-2 top-2 text-gray-400 cursor-pointer"
              />
            ) : (
              <IoIosEyeOff
                onClick={() => setShowPass(true)}
                className="absolute text-xl right-2 top-2 text-gray-400 cursor-pointer"
              />
            )}
          </div>
          {formType === "signup" && (
            <button onClick={handleSubmit} className="w-full bg-[#fd3752] text-white py-2 rounded-lg hover:bg-[#791b27]">
              CREATE ACCOUNT
            </button>
          )}
          {formType === "signin" && (
            <button onClick={handleSubmit} className="w-full bg-[#fd3752] text-white py-2 rounded-lg hover:bg-[#791b27]">
              LOGIN
            </button>
          )}
        </form>
        {formType === "signup" && (
          <div className="text-center flex gap-5   text-gray-400 text-sm mt-4">
            <p>Already have an account?</p>{" "}
            <p
              onClick={() => setFormType("signin")}
              className="text-[#fd3752] cursor-pointer "
            >
              Log in
            </p>
          </div>
        )}
        {formType === "signin" && (
          <p className="text-center flex gap-5 text-gray-400 hover:underline-offset-8 text-sm mt-4">
            <p>Create Account? </p>
            <p
              onClick={() => setFormType("signup")}
              className="text-[#fd3752] cursor-pointer"
            >
              Register
            </p>
          </p>
        )}
      </div>
    </div>
  );
};

export default UserAdminForm;
