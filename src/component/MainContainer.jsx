import React from "react";
import AsideFilter from "./maincontainer/AsideFilter";
import Container from "./maincontainer/Container";

const MainContainer = () => {
  return (
    <div className="flex">
      <div className=" sticky top-36 w-1/4 inline-block h-96">
        <AsideFilter />
      </div>
      <div className="w-3/4 ml-4">
        <Container />
      </div>
    </div>
  );
};

export default MainContainer;

