export const Application = () => {
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
              class="flex block w-full pb-6 text-sm text-gray-900 border-b-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div className="flex justify-end mx-16">
          <button className="bg-blue text-white py-1.5 px-8 rounded-2xl">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
