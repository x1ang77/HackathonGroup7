import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./partials/Login";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="h-screen w-full md:flex">
      <div className="w-1/12 h-screen bg-blue">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
