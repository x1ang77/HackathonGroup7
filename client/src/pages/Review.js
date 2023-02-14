import { useQuery } from "react-query";
import { getAllUsers } from "../api/users";
import GetReviewUsers from "./GetReviewUsers";

export const Review = () => {
  const { data, isLoading } = useQuery("users", getAllUsers);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <div className="flex justify-between mx-16 mt-5">
          <h1 className="text-2xl text-blue font-bold">Performance Review</h1>
        </div>
        <div className="mx-16 flex justify-between mt-5 mb-2">
          <h1 className="font-bold">User List</h1>
          <h1 className="text-blue font-bold">{data.length} User</h1>
        </div>
        <div class="relative overflow-x-auto mx-16 ">
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
              data.map((user) => <GetReviewUsers data={user} key={user._id} />)
            )}
          </table>
        </div>
      </div>
    </>
  );
};
