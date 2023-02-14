import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ratePerformance } from "../api/performance";
import { getUsersbyId } from "../api/users";

export const ReviewById = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data, isLoading } = useQuery(["user", id], () => getUsersbyId(id));

    const [review, setReview] = useState({
        productivity: "",
        playAboveTheLine: "",
        workConsistency: "",
        communication: "",
        attendance: "",
    });

    const queryClient = useQueryClient();

    const [error, setError] = useState();

    const mutation = useMutation(
        async ({ review, id }) => {
            ratePerformance(review, id);
        },
        {
            onSuccess: () => {
                //   queryClient.invalidateQueries(["users"]);
                toast.success("Rating successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            },
            onError: (error) => {
                setError(error);
            },
        }
    );

    const onChangeHandler = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutation.mutate({ review, id });
        navigate("/review");
        window.location.reload();
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <div>
                <div className="flex justify-between mx-16 mt-5">
                    <h1 className="text-2xl text-blue font-bold">
                        Performance Review
                    </h1>
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
                <div className="flex justify-center mt-28 ">
                    <div class="relative mx-16 w-[60rem]  rounded-2xl shadow-2xl p-5">
                        <form method="POST" onSubmit={onSubmitHandler}>
                            <table class="w-full text-sm text-left text-gray-500 ">
                                <thead class="text-xs text-gray-700 uppercase sticky top-0 border-b-2">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Performance
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-red-500"
                                        >
                                            Poor
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-sky-500"
                                        >
                                            Good
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-green-500"
                                        >
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
                                                    id="productivity-1"
                                                    type="radio"
                                                    value="1"
                                                    name="productivity"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="productivity-2"
                                                    type="radio"
                                                    value="2"
                                                    name="productivity"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="productivity-3"
                                                    type="radio"
                                                    value="3"
                                                    name="productivity"
                                                    onChange={onChangeHandler}
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
                                                    id="playAboveTheLine-1"
                                                    type="radio"
                                                    value="1"
                                                    name="playAboveTheLine"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="playAboveTheLine-2"
                                                    type="radio"
                                                    value="2"
                                                    name="playAboveTheLine"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="playAboveTheLine-3"
                                                    type="radio"
                                                    value="3"
                                                    name="playAboveTheLine"
                                                    onChange={onChangeHandler}
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
                                                    id="workConsistency-1"
                                                    type="radio"
                                                    value="1"
                                                    name="workConsistency"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="workConsistency-2"
                                                    type="radio"
                                                    value="2"
                                                    name="workConsistency"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="workConsistency-3"
                                                    type="radio"
                                                    value="3"
                                                    name="workConsistency"
                                                    onChange={onChangeHandler}
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
                                                    id="communication-1"
                                                    type="radio"
                                                    value="1"
                                                    name="communication"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="communication-2"
                                                    type="radio"
                                                    value="2"
                                                    name="communication"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="communication-3"
                                                    type="radio"
                                                    value="3"
                                                    name="communication"
                                                    onChange={onChangeHandler}
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
                                                    id="attendance-1"
                                                    type="radio"
                                                    value="1"
                                                    name="attendance"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="attendance-2"
                                                    type="radio"
                                                    value="2"
                                                    name="attendance"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex items-center px-6">
                                                <input
                                                    id="attendance-3"
                                                    type="radio"
                                                    value="3"
                                                    name="attendance"
                                                    onChange={onChangeHandler}
                                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex justify-end">
                                <button className="bg-blue py-1.5 px-8 rounded-lg text-white">
                                    Submit
                                </button>
                            </div>
                        </form>
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
