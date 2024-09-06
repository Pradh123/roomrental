import React from "react";
import { RoomCard } from "../RoomCard/RoomCard";

const Container = () => {
  return (
    <>
      <div
        className=" p-3 border border-blue-400 bg-white 
       "
      >
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
      </div>
    </>
  );
};

export default Container;
