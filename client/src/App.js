import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./partials/Login";
import GuestRoutes from "./GuestRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import { Dashboard } from "./pages/Dashboard";
import { Dashboard2 } from "./pages/Dashboard2";
import { Sidebar } from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkAuth } from "./api/users";
import jwtDecode from "jwt-decode";
import { User } from "./pages/User";
import { Application } from "./pages/Application";
import { Personal } from "./pages/PersonalInfo";
import { Review } from "./pages/Review";
import { ReviewById } from "./pages/ReviewById";

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
            <div className="w-full h-full overflow-hidden">
                <Routes>
                    {/* <Route element={<AdminRoutes />}> */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* </Route> */}
                    {/* <Route element={<UserRoutes />}> */}
                    <Route path="/dashboard2" element={<Dashboard2 />} />
                    {/* </Route> */}
                    <Route path="/user" element={<User />} />
                    <Route path="/application" element={<Application />} />
                    <Route path="/profile" element={<Personal />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/reviewbyid/:id" element={<ReviewById />} />
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
