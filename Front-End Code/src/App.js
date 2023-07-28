import React, { useLayoutEffect, useState } from "react";
import './App.css';
import Home from "./Components/Home";
import LoginPage from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Hydration from "./Components/Hydration";
import Sleep from "./Components/Sleep";
import Metric from "./Components/Metrics";
// import { Provider } from "react-redux";
// import { Register } from "./Components/Register;


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/register" element={<Register/> }/>
      
      <Route path="/login" element={<LoginPage/> }/>
      
      <Route path ="/hydration" element={<Hydration/>}/>
      <Route path ="/sleep" element={<Sleep/>}/>
      <Route path ="/metrics" element={<Metric/>}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;

