import React from "react";
import AsideFilter from "./maincontainer/AsideFilter";
import Container from "./maincontainer/Container";
import { useContext } from "react";
import { Login } from "./Signup&login/Login";
import { Signup } from "./Signup&login/Signup";
import { UserContext } from "../Context/Context";
const MainContainer = () => {
 const { isSignUp, isLogin } = useContext(UserContext);

//  console.log(isSignUp)

  return (
    <div className="flex">
      <div className=" sticky top-36 w-1/4 inline-block h-96">
        <AsideFilter />
      </div>
      <div className="w-3/4 mt-2 ml-4">
        <Container />
      </div>
    </div>
  );
};

export default MainContainer;

