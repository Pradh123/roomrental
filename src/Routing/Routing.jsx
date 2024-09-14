import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "../component/MainContainer";
import RoomPage from "../component/RoomPage/RoomPage";
import UserAdminForm from "../component/UserAdminForm/UserAdminForm";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/:pages" element={<RoomPage />} />
        <Route path="/admin/user" element={<UserAdminForm />} />
        {/* <Route path="/admin/create-room" element={<UserAdminForm />} /> */}
      </Routes>
    </div>
  );
};

export default Routing;
