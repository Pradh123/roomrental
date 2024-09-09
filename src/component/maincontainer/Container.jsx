import React from "react";
import { RoomCard } from "../RoomCard/RoomCard";
import BottomLink from "../BottomLink/BottomLink";

const Container = () => {
  return (
    <>
      <div>
        {[1, 2, 3, 4, 4, 5].map((data) => (
          <RoomCard />
        ))}
      </div>
      <BottomLink />
      <div className=" text-center my-3">
        <button className=" bg-[#009587] px-4 py-3 rounded-md hover:bg-[#007a6f] ">
          Post Your Requirement
        </button>
      </div>
    </>
  );
};

export default Container;
