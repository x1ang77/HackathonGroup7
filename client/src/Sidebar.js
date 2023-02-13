import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHandCoinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "./api/users";

export const Sidebar = () => {
    let navigate = useNavigate();
    return (
        <div className="grid grid-cols-1 content-between h-screen">
            <div className="flex flex-col mx-auto text-4xl text-white space-y-10 mt-20">
                <NavLink to="dashboard">
                    <RxDashboard />
                </NavLink>
                <FiUser />
                <BiCalendarCheck />
                <RiHandCoinLine />
            </div>
            <div className="flex flex-col mx-auto text-4xl text-white space-y-10 mb-5">
                <button
                    onClick={() => {
                        localStorage.removeItem("username");
                        logout();
                        navigate("/");
                        window.location.reload();
                    }}
                >
                    <BiLogOut />
                </button>
            </div>
        </div>
    );
};
