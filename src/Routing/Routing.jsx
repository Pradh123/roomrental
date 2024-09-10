import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "../component/MainContainer";
import RoomPage from "../component/RoomPage/RoomPage";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/:pages" element={<RoomPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
