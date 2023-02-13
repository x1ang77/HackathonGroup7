import { FaUserCircle } from "react-icons/fa";
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
        <div className="flex justify-between mx-5 pt-2">
          <h1 className="font-bold">Welcome back Admin!</h1>
          <h1 className="text-sm text-gray">15 FEB 2023, Wednesday</h1>
        </div>
        <div className="flex mx-5 grid content-center">
          <FaUserCircle className="text-blue text-9xl" />
        </div>
      </div>
    </div>
  );
};
