/* eslint-disable no-unused-vars */
import React from "react";
import AsideFilter from "./maincontainer/AsideFilter";
import Container from "./maincontainer/Container";
import { useContext, useState } from "react";
import { Login } from "./Signup&login/Login";
import { Signup } from "./Signup&login/Signup";
import { UserContext } from "../Context/Context";
import SearchBar from "./SearchBar/SearchBar";
import { OwnerDetails } from "./Signup&login/OwnerDetails";
import "../component/Signup&login/module.css";
const MainContainer = () => {
  const { isSignUp, isLogin } = useContext(UserContext);
  const { OwenerDetailsPopUp } = useContext(UserContext);

  return (
    <>
      <SearchBar />
      <div className="flex">
        {OwenerDetailsPopUp && (
          <div className="signUpform  sticky">
            {OwenerDetailsPopUp && <OwnerDetails />}
          </div>
        )}
        <div>
          {isSignUp && <Signup />}
          {isLogin && <Login />}
        </div>

        <div className=" sticky top-36 w-1/4 inline-block h-96">
          <AsideFilter />
        </div>
        <div className="w-3/4 mt-2 ml-4">
          <Container />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
