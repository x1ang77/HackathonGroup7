import { useState } from "react";
import { applyLeave } from "../api/leaves";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { toast } from "react-toastify";
import { getLeaves } from "../api/leaves";
import GetApplication from "./GetApplication";
import { Approved } from "./Approved";
import { Rejected } from "./Rejected";
import jwtDecode from "jwt-decode";

export const Application = () => {
    const navigate = useNavigate();
    const [leave, setLeave] = useState({
        typeOfLeave: "",
        date: "",
        details: "",
    });
    const [image, setImage] = useState();
    const { data, isLoading } = useQuery("leaves", getLeaves);

    const queryClient = useQueryClient();
    const mutation = useMutation(
        ({ leave, image }) => applyLeave(leave, image),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["leaves"]);
                toast.success("Added successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            onError: async () => {
                let x = await mutation.error;
                toast.error(x, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
        }
    );

    const onChangeHandler = (e) => {
        setLeave({ ...leave, [e.target.name]: e.target.value });
        console.log(leave);
    };

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
        console.log(image);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        mutation.mutate({ leave, image });
        if (mutation.isSuccess) navigate("/dashboard");
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    var dec = jwtDecode(localStorage.getItem("token"));

    return (
        <div>
            <div className="flex mx-16 mt-5">
                <h1 className="text-2xl text-blue font-bold">Application</h1>
            </div>
            <form
                method="POST"
                className="flex-col"
                encType="multipart/form-data"
                onSubmit={onSubmitHandler}
            >
                <div className="flex space-x-10 mx-16 mt-2">
                    <div className=" w-[60%]">
                        <select
                            id="typeOfLeave"
                            name="typeOfLeave"
                            class="flex block w-full pb-6 text-sm text-gray-900 border-b-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={onChangeHandler}
                        >
                            <option selected>Type of Leave</option>
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Medical Leave">Medical Leave</option>
                        </select>
                    </div>
                    <div class="relative z-0 mb-6 group w-[60%]">
                        <input
                            id="date"
                            name="date"
                            type="date"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                            onChange={onChangeHandler}
                        />
                        <label
                            for="date"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Date
                        </label>
                    </div>
                    <div className=" w-[60%]">
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            name="image"
                            type="file"
                            onChange={imageHandler}
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
                        name="details"
                        onChange={onChangeHandler}
                    ></textarea>
                </div>
                <div className="flex justify-end mx-16 mt-5">
                    <button className="bg-blue text-white py-1.5 px-8 rounded-2xl">
                        Apply
                    </button>
                </div>
            </form>

            {dec.data.isAdmin ? (
                <>
                    {" "}
                    <div className="mx-16 flex justify-between mt-5 mb-2">
                        <h1 className="font-bold">Pending Application</h1>
                        <div>
                            <Rejected data={data} />
                            <Approved data={data} />
                        </div>
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
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            {data.length === 0 ? (
                                <h2 className="text-center p-5">
                                    No Application
                                </h2>
                            ) : (
                                data.map((user) => (
                                    <GetApplication
                                        data={user}
                                        key={user._id}
                                    />
                                ))
                            )}
                        </table>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};
