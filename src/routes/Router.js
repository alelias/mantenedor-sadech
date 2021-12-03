import React from 'react';

import { Routes, Route } from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="home" exact element={<Home />} />
        </Routes>
     );
}
 
export default Router;