import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Posts/>} />
    </Routes>
  );
};

export default AllRoutes;
