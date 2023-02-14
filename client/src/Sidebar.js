import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHandCoinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "./api/users";
import jwtDecode from "jwt-decode";

export const Sidebar = () => {
  const decoded = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : null;

  let navigate = useNavigate();
  return (
    <>
      {decoded && (
        <div className="grid grid-cols-1 content-between h-screen">
          <div className="flex flex-col mx-auto text-4xl text-white space-y-10 mt-20">
            {!decoded.data.isAdmin ? (
              <NavLink to="dashboard2">
                <RxDashboard />
              </NavLink>
            ) : (
              <NavLink to="dashboard">
                <RxDashboard />
              </NavLink>
            )}

            <NavLink to="user">
              <FiUsers />
            </NavLink>
            <NavLink to="application">
              <BiCalendarCheck />
            </NavLink>
            <NavLink to="profile">
              <FiUser />
            </NavLink>
            <NavLink to="review">
              <RiHandCoinLine />
            </NavLink>
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
      )}
    </>
  );
};
