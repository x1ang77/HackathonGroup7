export const ReviewById = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mx-16 mt-5">
          <h1 className="text-2xl text-blue font-bold">Performance Review</h1>
        </div>
        <div class="relative overflow-x-auto mx-16 max-h-[22rem]">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-sky-100 sticky top-0">
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
              <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Productivity
                </th>
                <td>
                  <div class="flex items-center px-6">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td>
                  <div class="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <td>
                  <div class="flex items-center">
                    <input
                      checked
                      id="default-radio-3"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
