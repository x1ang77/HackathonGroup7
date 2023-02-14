export const Application = () => {
<<<<<<< HEAD
  return (
    <div>
      <div className="flex mx-16 mt-5">
        <h1 className="text-2xl text-blue font-bold">Application</h1>
      </div>
      <form>
        <div className="flex space-x-10 mx-16 mt-2">
          <div className=" w-[60%]">
            <select
              id="typeOfLeave"
              name="typeOfLeave"
              class="flex block w-full pb-6 text-sm text-gray-900 border-b-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Type of Leave</option>
              <option value="annualLeave">Annual Leave</option>
              <option value="medicalLeave">Medical Leave</option>
            </select>
          </div>
          <div class="relative z-0 mb-6 group w-[60%]">
            <input
              id="username"
              name="username"
              type="date"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="username"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
          </div>
          <div className=" w-[60%]">
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
          </div>
        </div>
        <div className="mx-16 mt-2">
          <label
            for="message"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Details
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="flex justify-end mx-16 mt-5">
          <button className="bg-blue text-white py-1.5 px-8 rounded-2xl">
            Apply
          </button>
        </div>
      </form>
=======
    return (
        <div>
            <div className="flex mx-16 mt-5">
                <h1 className="text-2xl text-blue font-bold">Application</h1>
            </div>
            <form>
                <div className="flex space-x-10 mx-16 mt-2">
                    <div className=" w-[60%]">
                        <select
                            id="role"
                            class="flex block w-full pb-6 text-sm text-gray-900 border-b-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option selected>Type of Leave</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className=" w-[60%]">
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                        />
                    </div>
                </div>
                <div className="mx-16 mt-2">
                    <label
                        for="message"
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Details
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                    ></textarea>
                </div>
                <div className="flex justify-end mx-16 mt-5">
                    <button className="bg-blue text-white py-1.5 px-8 rounded-2xl">
                        Apply
                    </button>
                </div>
            </form>
>>>>>>> 07818a35b578e8e4a06151421599155ebf74e667

            <div className="mx-16 flex justify-between mt-5 mb-2">
                <h1 className="font-bold">Pending Application</h1>
                <h1 className="text-blue font-bold">8 Pending</h1>
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
                                Leave Application
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" overflow-y-auto">
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                simplr001
                            </th>
                            <td class="px-6 py-4">John</td>
                            <td class="px-6 py-4">Medical Leave</td>
                            <td class="px-6 py-4 space-x-5">
                                <a
                                    href="#"
                                    class="font-medium text-sky-500 hover:underline"
                                >
                                    Approve
                                </a>
                                <a
                                    href="#"
                                    class="font-medium text-red-500 hover:underline"
                                >
                                    Reject
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                simplr001
                            </th>
                            <td class="px-6 py-4">John</td>
                            <td class="px-6 py-4">Medical Leave</td>
                            <td class="px-6 py-4 space-x-5">
                                <a
                                    href="#"
                                    class="font-medium text-sky-500 hover:underline"
                                >
                                    Approve
                                </a>
                                <a
                                    href="#"
                                    class="font-medium text-red-500 hover:underline"
                                >
                                    Reject
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                simplr001
                            </th>
                            <td class="px-6 py-4">John</td>
                            <td class="px-6 py-4">Medical Leave</td>
                            <td class="px-6 py-4 space-x-5">
                                <a
                                    href="#"
                                    class="font-medium text-sky-500 hover:underline"
                                >
                                    Approve
                                </a>
                                <a
                                    href="#"
                                    class="font-medium text-red-500 hover:underline"
                                >
                                    Reject
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                simplr001
                            </th>
                            <td class="px-6 py-4">John</td>
                            <td class="px-6 py-4">Medical Leave</td>
                            <td class="px-6 py-4 space-x-5">
                                <a
                                    href="#"
                                    class="font-medium text-sky-500 hover:underline"
                                >
                                    Approve
                                </a>
                                <a
                                    href="#"
                                    class="font-medium text-red-500 hover:underline"
                                >
                                    Reject
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                simplr001
                            </th>
                            <td class="px-6 py-4">John</td>
                            <td class="px-6 py-4">Medical Leave</td>
                            <td class="px-6 py-4 space-x-5">
                                <a
                                    href="#"
                                    class="font-medium text-sky-500 hover:underline"
                                >
                                    Approve
                                </a>
                                <a
                                    href="#"
                                    class="font-medium text-red-500 hover:underline"
                                >
                                    Reject
                                </a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                simplr001
                            </th>
                            <td class="px-6 py-4">John</td>
                            <td class="px-6 py-4">Medical Leave</td>
                            <td class="px-6 py-4 space-x-5">
                                <a
                                    href="#"
                                    class="font-medium text-sky-500 hover:underline"
                                >
                                    Approve
                                </a>
                                <a
                                    href="#"
                                    class="font-medium text-red-500 hover:underline"
                                >
                                    Reject
                                </a>
                            </td>
                        </tr>
                        value{" "}
                        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                simplr001
                            </th>
                            <td class="px-6 py-4">John</td>
                            <td class="px-6 py-4">Medical Leave</td>
                            <td class="px-6 py-4 space-x-5">
                                <a
                                    href="#"
                                    class="font-medium text-sky-500 hover:underline"
                                >
                                    Approve
                                </a>
                                <a
                                    href="#"
                                    class="font-medium text-red-500 hover:underline"
                                >
                                    Reject
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
