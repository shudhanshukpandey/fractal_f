import { Routes ,Route,  } from "react-router-dom";

import Login from "../components/Login";
import Signup from "../components/Signup"
import AfterLogin from "../components/AfterLogin";


import React from 'react'

const AllRoutes=()=> {
  return (
    <>
   
    <Routes>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/afterlogin" element={<AfterLogin/>}/>
    </Routes>
  
    </>
  )
}

export default AllRoutes;

