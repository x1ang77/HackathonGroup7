import { FaUserCircle, FaUsers } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getLeaves } from "../api/leaves";
import { getAllUsers } from "../api/users";
import jwtDecode from "jwt-decode";

export const Dashboard = () => {
  const decoded = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token"))
    : null;
  const { data, isLoading } = useQuery("leaves", getLeaves);
  const { data: data2, isLoading2 } = useQuery("users", getAllUsers);
  //   const sort = data.sort((a, b) => b.totalPoints - a.totalPoints);
  //   console.log(sort);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isLoading2) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="flex justify-between mx-16 mt-5">
        <h1 className="text-2xl text-blue font-bold">Dashboard</h1>
        <div className="flex items-center text-xl">
          <FaUserCircle className="text-blue" />
          <h1>{decoded.data.name}</h1>
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
            <h1>{decoded.data.username}</h1>
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
            <div className=" overflow-y-auto h-[15rem]">
              {data.length === 0 ? (
                <h2 className="text-center p-5">No Application</h2>
              ) : (
                data.map((user) =>
                  user.pending === 0 ? (
                    <div className="flex text-gray-700 text-base space-x-2 mt-2">
                      <h1 className="font-bold">{user.name}:</h1>
                      <h1>{user.typeOfLeave}</h1>
                    </div>
                  ) : null
                )
              )}
            </div>
          </div>
          <div>
            <Link to="/application">
              <button className="bg-blue text-white w-full h-8 rounded-2xl">
                Review Applications
              </button>
            </Link>
          </div>
        </div>
        <div className="block p-6 rounded-lg bg-white w-72 h-[22rem] grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
          <div>
            <h5 className="text-blue font-bold mb-2">
              Employee Performance Scores
            </h5>
            <div className="w-full border-b-2 border-blue"></div>
            <div className=" overflow-y-auto h-[15rem]">
              {data2.length === 0 ? (
                <h2 className="text-center p-5">No Application</h2>
              ) : (
                data2.map((user) => (
                  <div className="flex justify-between text-gray-700 text-base space-x-2 mt-2">
                    <h1 className="font-bold">{user.name}</h1>
                    <h1>{user.totalPoints}</h1>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="block rounded-lg bg-white w-72 h-20 grid content-between shadow-[0px_0px_20px_2px_rgba(0,0,0,0.3)]">
            <div className="flex items-center p-5 h-20">
              <div className="flex items-center space-x-5  w-full">
                <FaUsers className="text-blue text-5xl self-center" />
                <h1 className="text-2xl text-blue">Users</h1>
              </div>
              <h1 className="text-3xl text-sky-500">
                {data2.length === 0 ? 0 : data2?.length}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
