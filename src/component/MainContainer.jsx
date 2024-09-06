import React from "react";
import AsideFilter from "./maincontainer/AsideFilter";
import Container from "./maincontainer/Container";
import { useContext } from "react";
import { Login } from "./Signup&login/Login";
import { Signup } from "./Signup&login/Signup";
import { UserContext } from "../Context/Context";
const MainContainer = () => {
  const { isSignUp, isLogin } = useContext(UserContext);
  console.log(isSignUp);

  return (
    <div className="flex w-full border border-red-500 justify-center">
      <div className=" relative    p-5 border border-blue-500 ">
        <AsideFilter />
      </div>
      <div className="w-3/4 ml-4">
        <Container />
      </div>
    </div>
  );
};

export default MainContainer;
