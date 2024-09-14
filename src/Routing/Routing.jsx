import React from "react";
import { Routes, Route } from "react-router-dom";
import MainContainer from "../component/MainContainer";
import RoomPage from "../component/RoomPage/RoomPage";
import UserAdminForm from "../component/UserAdminForm/UserAdminForm";
import RoomCreate from "../component/RoomCreate/RoomCreate";
import RoomDetails from "../component/RoomDetailsALL/RoomDetails/RoomDetails";
import LocalityDeatils from "../component/RoomDetailsALL/LocalityDetails/LocalityDeatils";
import RentalDetails from "../component/RoomDetailsALL/RentalDetails/RentalDetails";
import Gallery from "../component/RoomDetailsALL/Gallery/Gallery";
import Schedule from "../component/RoomDetailsALL/Schedule/Schedule";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/:pages" element={<RoomPage />} />
        <Route path="/admin/user" element={<UserAdminForm />} />
        <Route path="/admin/create-room/" element={<RoomCreate/>} >
           <Route path="" element={<RoomDetails/>}/>
           <Route path= "locality-details" element={<LocalityDeatils/>}/>
           <Route path= "rental-details" element={<RentalDetails/>}/>
           <Route path= "image-upload" element={<Gallery/>}/>
           <Route path= "Schedule" element={<Schedule/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
