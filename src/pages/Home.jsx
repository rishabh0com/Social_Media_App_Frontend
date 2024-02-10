import React from "react";
import Navbar  from "../components/Navbar.jsx";
import axios from "axios";
import { useState } from 'react';

const Home = () => {
    const handleClick = async () => {
        try {
            const res = await axios.get("http://localhost:8080/users/logout",{withCredentials:true});
            const resData = await res;
            console.log(resData)
            resData.status && alert(resData.data.msg);
            if(resData.data){
                localStorage.removeItem("userInfo");
                localStorage.removeItem("access");
            }
       
           } catch (error) {
             console.log("logout error",error)
             
           }
       
    };
  return <div>
    <Navbar/>
    <h1>Home Page</h1>
    <button onClick={handleClick}>Logout</button>

  </div>;
};

export default Home;
