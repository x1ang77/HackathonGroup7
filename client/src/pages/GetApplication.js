import { GrFormView } from "react-icons/gr";
import { updateLeave } from "../api/leaves";
import { useQueryClient, useMutation } from "react-query";

function GetApplication({
  data: { username, name, typeOfLeave, details, image, pending, _id, date },
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation(({ apply, _id }) => updateLeave(apply, _id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["leaves"]);
    },
  });

  const onSubmitHandler = (apply) => {
    mutation.mutate({ apply, _id });
    console.log({ apply, name });
  };
  return (
    <>
      {pending == 0 ? (
        <tbody className=" overflow-y-auto">
          <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {username}
            </th>
            <td class="px-6 py-4">{name}</td>
            <td class="px-6 py-4">{typeOfLeave}</td>
            <td class="px-6 py-4">{date}</td>
            <td class="px-6 py-4 space-x-5">
              <button
                value={1}
                onClick={() => onSubmitHandler(1)}
                name="pending"
                class="font-medium text-green-500 hover:underline"
              >
                Approve
              </button>
              <button
                name="pending"
                value={2}
                onClick={() => onSubmitHandler(2)}
                class="font-medium text-red-500 hover:underline"
              >
                Reject
              </button>
            </td>
            <td class="px-6 py-4 space-x-5">
              <button
                type="button"
                class="flex items-center px-6 py-2.5 font-medium text-xs leading-tight hover:underline uppercase focus:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-bs-toggle="modal"
                data-bs-target={`#modal${_id}`}
              >
                View
                <GrFormView className="text-2xl" />
              </button>

              <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id={`modal${_id}`}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5
                        class="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalLabel"
                      >
                        {name}
                      </h5>
                      <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body relative p-4">
                      <div className="flex justify-end">
                        <h1 className="font-bold text-blue">{date}</h1>
                      </div>
                      <div className="flex text-xl mb-3">
                        <h1 className="font-bold">Details: </h1>
                        <h1>{details}</h1>
                      </div>
                      <h1 className="font-bold text-xl">Attached Slip: </h1>
                      <img
                        src={process.env.REACT_APP_API_SERVER + image}
                        className="w-96"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      ) : null}
    </>
  );
}

export default GetApplication;
