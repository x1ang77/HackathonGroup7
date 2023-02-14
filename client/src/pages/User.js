import { useState } from "react";
import { register } from "../api/users";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "react-query";
import { getAllUsers } from "../api/users";
import GetUsers from "./GetUser";

export const User = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    isAdmin: "",
  });
  console.log(user);

  const [error, setError] = useState();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("users", getAllUsers);
  console.log(data);

  const mutation = useMutation(async (user) => register(user), {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("Register successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    onError: (error) => {
      setError(error);
    },
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(user);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="flex mx-16 mt-5">
        <h1 className="text-2xl text-blue font-bold">Manage User</h1>
      </div>
      <form method="POST" onSubmit={onSubmitHandler}>
        <div className="flex space-x-10 mx-16 mt-2">
          <div class="relative z-0 mb-6 group w-[60%]">
            <input
              id="username"
              name="username"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeHandler}
            />
            <label
              for="username"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
          </div>
          <div class="relative z-0 mb-6 group w-[60%]">
            <input
              id="password"
              name="password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeHandler}
            />
            <label
              for="password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
        </div>
        <div className="flex space-x-10 mx-16">
          <div class="relative z-0 mb-6 group w-[60%]">
            <input
              id="name"
              name="name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeHandler}
            />
            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className=" w-[60%]">
            <select
              id="role"
              name="isAdmin"
              onChange={onChangeHandler}
              class="flex block w-full pb-6 text-sm text-gray-900 border-b-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select Role</option>
              <option value={true}>Admin</option>
              <option value="false">Non-Admin</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mx-16">
          <button className="bg-blue text-white py-1.5 px-8 rounded-2xl">
            Register
          </button>
        </div>
      </form>
      <div className="mx-16 flex justify-between mt-5 mb-2">
        <h1 className="font-bold">User List</h1>
        <h1 className="text-blue font-bold">{data.length} User</h1>
      </div>
      <div class="relative overflow-x-auto mx-16 max-h-[22rem]">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-sky-100 sticky top-0">
            <tr>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <h2 className="text-center p-5">No User</h2>
          ) : (
            data.map((user) => <GetUsers data={user} key={user._id} />)
          )}
        </table>
      </div>
    </div>
  );
};
