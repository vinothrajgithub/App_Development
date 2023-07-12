import React, { useLayoutEffect, useState } from "react";
import './App.css';
import Home from "./Components/Home";
import LoginPage from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route,Routes } from "react-router-dom";
// import { Register } from "./Components/Register;
import Activity from "./Components/Activity";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/register" element={<Register/> }/>
      <Route path="/login" element={<LoginPage/> }/>
      <Route path="/activity" element={<Activity/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;