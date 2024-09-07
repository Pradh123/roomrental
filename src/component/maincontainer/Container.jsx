import React from "react";
import { RoomCard } from "../RoomCard/RoomCard";
import BottomLink from "../BottomLink/BottomLink";

const Container = () => {
  return (
    <>
      <div
        className=" p-3 border bg-white 
       "
      >
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
      </div>
      <BottomLink/>
    </>
  );
};

export default Container;
