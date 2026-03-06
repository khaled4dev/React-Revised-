import React, { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

const App = () => {



  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<h1 className="text-4xl font-bold text-center mt-10">Welcome to Notes App</h1>} />
      <Route path="/home" element={<h1 className="text-4xl font-bold text-center mt-10">Home page</h1>} />
      <Route path="/notes" element={<Notes />} /> 
    </Routes>
  </>
  );
};

export default App;
