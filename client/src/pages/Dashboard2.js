import { FaUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Donut from "../images/donut.png";
export const Dashboard2 = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between mx-16 mt-5">
                <h1 className="text-2xl text-blue font-bold">Dashboard</h1>
                <div className="flex items-center text-xl">
                    <FaUserCircle className="text-blue" />
                    <h1> User</h1>
                </div>
            </div>
            <div className="bg-lightblue h-64 mx-16 mt-2 rounded-2xl">
                <div className="flex justify-between h-10 mx-5 pt-2">
                    <h1 className="font-bold">Welcome back User!</h1>
                    <h1 className="text-sm text-gray">
                        15 FEB 2023, Wednesday
                    </h1>
                </div>
                <div className="flex items-stretch h-48 mx-5">
                    <FaUserCircle className="text-blue text-9xl self-center" />
                    <div className="mt-10 ml-20 space-y-5">
                        <h1 className="text-blue font-bold">User Info</h1>
                        <h1>Admin</h1>
                        <h1 className="underline text-sm">
                            <a href="/dashboard">Edit personal info</a>
                        </h1>
                    </div>
                    <div className="mt-10 ml-20 space-y-5">
                        <h1 className="text-blue font-bold">Company Info</h1>
                        <h1>Simplr Logic</h1>
                        <input type="password"></input>
                    </div>
                </div>
            </div>

            <div className="flex mx-16 mt-5 space-x-10">
                <div className="block p-6 rounded-lg bg-white w-72 h-[22rem] grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
                    <div>
                        <div className="flex">
                            <h5 className="text-blue font-bold mb-2 mr-12">
                                Applications
                            </h5>
                            <button
                                className="bg-blue w-24 rounded-3xl text-white mb-2"
                                onClick={() => navigate("/application")}
                            >
                                Apply
                            </button>
                        </div>
                        <div className="w-full border-b-2 border-blue"></div>
                        <p className="text-gray-700 text-base mt-4">
                            simplr001: Medical Leave
                        </p>
                    </div>
                </div>

                <div className="flex mx-16 space-x-10">
                    <div className="block p-6 rounded-lg bg-white w-72 h-[22rem] grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
                        <div>
                            <div className="flex">
                                <h5 className="text-blue font-bold mb-2 mr-12 mb-8">
                                    Annual Leave Reminder
                                </h5>
                            </div>
                            <div className="relative">
                                <img
                                    src={Donut}
                                    className="h-36 ml-12 mt-2 z-40"
                                />
                                <p className="absolute text-gray-700 text-base text-center text-xl z-0 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
                                    Annual
                                </p>
                                <p className="absolute text-gray-700 text-base text-center text-xl z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-3">
                                    Leave
                                </p>
                            </div>
                            <div className="w-full border-b border-gray mt-4"></div>
                            <div className="mt-4">
                                <h1>Remainder: 7 days</h1>
                                <h1>Used: 5 days</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block rounded-lg bg-white w-72 h-20 grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center space-x-5 h-20 w-full p-5">
                        <FaUsers className="text-blue text-5xl self-center" />
                        <h1 className="text-2xl">Benefits</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
