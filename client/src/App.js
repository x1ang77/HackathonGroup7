import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./partials/Login";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="h-screen w-full md:flex">
      <div className="w-1/12 h-screen bg-blue">
        <Sidebar />
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
