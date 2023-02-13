import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./partials/Login";
import GuestRoutes from "./GuestRoutes";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkAuth } from "./api/users";
import jwtDecode from "jwt-decode";

function App() {
    // const { isAuth, user } = checkAuth();
    const decoded = localStorage.getItem("token")
        ? jwtDecode(localStorage.getItem("token"))
        : null;

    return (
        <div className="h-screen w-full md:flex">
            {decoded ? (
                <div className="w-1/12 h-screen bg-blue">
                    <Sidebar />
                </div>
            ) : (
                <></>
            )}
            <div className="w-full">
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route element={<GuestRoutes />}>
                        <Route path="/" element={<Login />} />
                    </Route>
                </Routes>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                ></ToastContainer>
            </div>
        </div>
    );
}

export default App;
