import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./partials/Login";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="h-screen w-full md:flex">
      <div className="w-1/5 h-screen">
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
