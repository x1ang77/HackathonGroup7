import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHandCoinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="grid grid-cols-1 content-between h-screen">
      <div className="sidebar flex flex-col mx-auto text-4xl text-white space-y-10 mt-20">
        <NavLink to="dashboard">
          <RxDashboard />
        </NavLink>
        <NavLink to="user">
          <FiUser />
        </NavLink>
        <NavLink to="application">
          <BiCalendarCheck />
        </NavLink>
        <RiHandCoinLine />
      </div>
      <div className="flex flex-col mx-auto text-4xl text-white space-y-10 mb-5">
        <BiLogOut />
      </div>
    </div>
  );
};
