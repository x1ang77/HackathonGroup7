import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { createPersonalInfo } from "../api/profiles";
import { toast } from "react-toastify";

export const Personal = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const queryClient = useQueryClient();
    const mutation = useMutation((info) => createPersonalInfo(info), {
        onSuccess: () => {
            queryClient.invalidateQueries(["profiles"]);
            navigate("/");
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
    });

    const onChangeHandler = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleNumericChange = (e) => {
        console.log("handleNumericChange called");
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setProfile({ ...profile, [e.target.name]: value });
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const info = profile;
        mutation.mutate(info);
        if (mutation.isSuccess) navigate("/");
    };

    return (
        <div>
            <div className="flex justify-between mx-16 mt-5">
                <h1 className="text-2xl text-blue font-bold">Profile</h1>
            </div>
            <div className="flex justify-center p-2">
                <form
                    class="w-[75rem] p-6 bg-white"
                    encType="multipart/form-data"
                    method="POST"
                    onSubmit={onSubmitHandler}
                >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue">
                        Personal Details
                    </h5>
                    <div>
                        <div className="flex space-x-10 mx-16">
                            <div class="relative z-0 mb-6 group w-[60%]">
                                <input
                                    id="name"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={onChangeHandler}
                                />
                                <label
                                    for="name"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Fullname
                                </label>
                            </div>
                            <div class="relative z-0 mb-6 group w-[60%]">
                                <input
                                    type="text"
                                    id="ic"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={handleNumericChange}
                                />
                                <label
                                    for="ic"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    IC Number
                                </label>
                            </div>
                            <div className=" w-[60%]">
                                <select
                                    onChange={onChangeHandler}
                                    id="gender"
                                    class="flex block w-full pb-6 text-sm text-gray-900 border-b-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex space-x-10 mx-16">
                            <div class="relative z-0 mb-6 group w-[60%]">
                                <input
                                    id="contact"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={onChangeHandler}
                                />
                                <label
                                    for="contact"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Contact Number
                                </label>
                            </div>
                            <div class="relative z-0 mb-6 group w-[60%]">
                                <input
                                    id="email"
                                    type="email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={onChangeHandler}
                                />
                                <label
                                    for="email"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="mx-16">
                            <div class="relative z-0 mb-6 group">
                                <label
                                    for="address"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Address
                                </label>
                                <textarea
                                    id="address"
                                    rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={onChangeHandler}
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex space-x-10 mx-16">
                            <div class="relative z-0 mb-6 group w-[60%]">
                                <input
                                    id="contactName"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={onChangeHandler}
                                />
                                <label
                                    for="contactName"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Emergency Contact Name
                                </label>
                            </div>
                            <div class="relative z-0 mb-6 group w-[60%]">
                                <input
                                    id="contactNumber"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={onChangeHandler}
                                />
                                <label
                                    for="contactNumber"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Emergency Contact Number
                                </label>
                            </div>
                            <div class="relative z-0 mb-6 group w-[60%]">
                                <input
                                    id="contactRelationship"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={onChangeHandler}
                                />
                                <label
                                    for="contactRelationship"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Emergency Contact Relationship
                                </label>
                            </div>
                        </div>
                    </div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue ">
                        Account Info
                    </h5>
                    <div className="flex space-x-10 mx-16">
                        <div class="relative z-0 mb-6 group w-[60%]">
                            <input
                                id="bank"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={onChangeHandler}
                            />
                            <label
                                for="bank"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Bank Name
                            </label>
                        </div>
                        <div class="relative z-0 mb-6 group w-[60%]">
                            <input
                                id="account"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={onChangeHandler}
                            />
                            <label
                                for="account"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Account No.
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-10 mx-16">
                        <div class="relative z-0 mb-6 group w-[60%]">
                            <input
                                id="socso"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={onChangeHandler}
                            />
                            <label
                                for="socso"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Socso
                            </label>
                        </div>
                        <div class="relative z-0 mb-6 group w-[60%]">
                            <input
                                id="epf"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={onChangeHandler}
                            />
                            <label
                                for="epf"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                EPF No.
                            </label>
                        </div>
                        <div class="relative z-0 mb-6 group w-[60%]">
                            <input
                                id="incomeTax"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={onChangeHandler}
                            />
                            <label
                                for="incomeTax"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Income Tax
                            </label>
                        </div>
                    </div>
                    <div className="mx-16 flex justify-end">
                        <button className="bg-blue text-white py-1.5 px-12 rounded-xl">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
