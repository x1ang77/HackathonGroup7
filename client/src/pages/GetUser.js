import React from "react";

function GetUsers({ data: { username, name, isAdmin } }) {
  return (
    <>
      <tbody className=" overflow-y-auto">
        <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {username}
          </th>
          <td class="px-6 py-4">{name}</td>
          {isAdmin ? (
            <td class="px-6 py-4">Admin</td>
          ) : (
            <td class="px-6 py-4">Non-Admin</td>
          )}

          <td class="px-6 py-4 space-x-5">
            <a href="#" class="font-medium text-sky-500 hover:underline">
              Edit
            </a>
            <a href="#" class="font-medium text-red-500 hover:underline">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default GetUsers;
