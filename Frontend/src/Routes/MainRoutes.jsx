import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Mainnav from "../Components/Mainnav";
import Signup from "../Components/Signup";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainnav />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
