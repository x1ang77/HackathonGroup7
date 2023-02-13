import { FaUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
export const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between mx-16 mt-5">
        <h1 className="text-2xl text-blue font-bold">Dashboard</h1>
        <div className="flex items-center text-xl">
          <FaUserCircle className="text-blue" />
          <h1>Admin</h1>
        </div>
      </div>
      <div className="bg-lightblue h-64 mx-16 mt-2 rounded-2xl">
        <div className="flex justify-between h-10 mx-5 pt-2">
          <h1 className="font-bold">Welcome back Admin!</h1>
          <h1 className="text-sm text-gray">15 FEB 2023, Wednesday</h1>
        </div>
        <div className="flex items-stretch h-48 mx-5">
          <FaUserCircle className="text-blue text-9xl self-center" />
          <div className="mt-10 ml-20 space-y-5">
            <h1 className="text-blue font-bold">User Info</h1>
            <h1>Admin</h1>
          </div>
          <div className="mt-10 ml-20 space-y-5">
            <h1 className="text-blue font-bold">Company Info</h1>
            <h1>Simplr Logic</h1>
          </div>
        </div>
      </div>

      <div className="flex mx-16 mt-5 space-x-10">
        <div className="block p-6 rounded-lg bg-white w-72 h-[22rem] grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
          <div>
            <h5 className="text-blue font-bold mb-2">Pending Applications</h5>
            <div className="w-full border-b-2 border-blue"></div>
            <p className="text-gray-700 text-base mt-4">
              simplr001: Medical Leave
            </p>
          </div>
          <div>
            <button className="bg-blue text-white w-full h-8 rounded-2xl">
              Review Applications
            </button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="block rounded-lg bg-white w-72 h-20 grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
            <div className="flex items-center space-x-5 h-20 w-full p-5">
              <FaUsers className="text-blue text-5xl self-center" />
              <h1 className="text-2xl">Users</h1>
            </div>
          </div>
          <div className="block rounded-lg bg-white w-72 h-20 grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
            <div className="flex items-center space-x-5 h-20 w-full p-5">
              <FaUsers className="text-blue text-5xl self-center" />
              <h1 className="text-2xl">Users</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
