import React from "react";
import AsideFilter from "./maincontainer/AsideFilter";
import Container from "./maincontainer/Container";

const MainContainer = () => {
  return (
    <div className="flex w-full border border-red-500 justify-center">
      <div className=" relative    p-5 border border-blue-500 ">
        <AsideFilter />
      </div>
      <div className="  w-[65%] p-4 border border-green-300 ">
        <Container />
      </div>
    </div>
  );
};

export default MainContainer;
