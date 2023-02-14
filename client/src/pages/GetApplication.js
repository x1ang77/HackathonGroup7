import { GrFormView } from "react-icons/gr";
import { updateLeave } from "../api/leaves";
import { useQueryClient, useMutation } from "react-query";
import { useState } from "react";

function GetApplication({
  data: { username, name, typeOfLeave, details, image, pending, _id },
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation(({ apply, _id }) => updateLeave(apply, _id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["leaves"]);
    },
  });

  //   const onChangeHandler = (e) => {
  //     setApply({ apply, [e.target.name]: e.target.value });
  //   };

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
              <a
                href="#"
                class="font-medium text-blue hover:underline flex items-center"
              >
                View
                <GrFormView className="text-2xl" />
              </a>
            </td>
          </tr>
        </tbody>
      ) : null}
    </>
  );
}

export default GetApplication;
