export const Rejected = ({ data }) => {
  return (
    <>
      <button
        class="inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#rejected"
        aria-controls="rejected"
      >
        View Rejected
      </button>

      <div
        class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
        tabindex="-1"
        id="rejected"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header flex items-center justify-between p-4">
          <h5
            class="offcanvas-title mb-0 leading-normal font-semibold"
            id="offcanvasRightLabel"
          >
            Rejected Leaves
          </h5>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
          {data.map((user) =>
            user.pending == 2 ? (
              <div
                class="flex justify-between p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                role="alert"
              >
                <div className="flex space-x-2">
                  <h1 className="font-bold">Type of Leave:</h1>
                  <h1>{user.typeOfLeave}</h1>
                </div>
                <h1>{user.name}</h1>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
