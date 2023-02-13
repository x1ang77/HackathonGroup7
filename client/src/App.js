import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./partials/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
