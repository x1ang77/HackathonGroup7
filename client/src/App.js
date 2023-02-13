import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./partials/Login";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./Sidebar";
import { User } from "./pages/User";
import { Application } from "./pages/Application";

function App() {
  return (
    <div className="h-screen w-full md:flex">
      <div className="w-1/12 h-screen bg-blue">
        <Sidebar />
      </div>
      <div className="w-full h-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="application" element={<Application />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
