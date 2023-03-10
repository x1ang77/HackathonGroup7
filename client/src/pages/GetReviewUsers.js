import React from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

function GetReviewUsers({ data: { username, name, isAdmin, _id, isReview } }) {
  return (
    <>
      <tbody className=" overflow-y-auto border-b">
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
            {!isReview ? (
              <Link to={`/reviewbyid/${_id}`}>
                <a href="#" class="font-medium text-sky-500 hover:underline">
                  Review
                </a>
              </Link>
            ) : (
              <h1 className="flex items-center text-green-700">
                Done
                <FiCheckCircle />
              </h1>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default GetReviewUsers;
