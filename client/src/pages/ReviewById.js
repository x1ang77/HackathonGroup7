import { useParams } from "react-router-dom";
import { getUsersbyId } from "../api/users";
import { useQuery } from "react-query";
export const ReviewById = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["user", id], () => getUsersbyId(id));
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <div className="flex justify-between mx-16 mt-5">
          <h1 className="text-2xl text-blue font-bold">Performance Review</h1>
          <div className="flex space-x-8 text-lg">
            <div className="flex space-x-2">
              <h1 className="font-bold">Username: </h1>
              <h1>{data.username}</h1>
            </div>
            <div className="flex space-x-2">
              <h1 className="font-bold">Name: </h1>
              <h1>{data.name}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <div class="relative mx-16 w-[60rem]">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase sticky top-0 border-b-2">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Performance
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Poor
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Good
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Excellent
                  </th>
                </tr>
              </thead>
              <tbody className=" overflow-y-auto">
                <tr class="bg-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Productivity
                  </th>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        id="one-1"
                        type="radio"
                        value=""
                        name="one"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="one-2"
                        type="radio"
                        value=""
                        name="one"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="one-3"
                        type="radio"
                        value=""
                        name="one"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="bg-slate-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Play Above The Line
                  </th>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        id="two-1"
                        type="radio"
                        value=""
                        name="two"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="two-2"
                        type="radio"
                        value=""
                        name="two"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="two-3"
                        type="radio"
                        value=""
                        name="two"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="bg-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Work Consistency
                  </th>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        id="three-1"
                        type="radio"
                        value=""
                        name="three"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="three-2"
                        type="radio"
                        value=""
                        name="three"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="three-3"
                        type="radio"
                        value=""
                        name="three"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="bg-slate-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Communication
                  </th>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        id="four-1"
                        type="radio"
                        value=""
                        name="four"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="four-2"
                        type="radio"
                        value=""
                        name="four"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="four-3"
                        type="radio"
                        value=""
                        name="four"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="bg-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Attendance
                  </th>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        id="five-1"
                        type="radio"
                        value=""
                        name="five"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="five-2"
                        type="radio"
                        value=""
                        name="five"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center px-6">
                      <input
                        checked
                        id="five-3"
                        type="radio"
                        value=""
                        name="five"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mx-16 space-x-2 mt-8">
          <div
            class="flex justify-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>Poor = 1 Points</div>
          </div>
          <div
            class="flex justify-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-sky-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>Good = 2 Points</div>
          </div>
          <div
            class="flex justify-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 inline w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <div>Excellent = 3 Points</div>
          </div>
        </div>
      </div>
    </>
  );
};
