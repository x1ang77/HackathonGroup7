import React, { useState } from "react";
import { login } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [inputType, setInputType] = useState("password");

    const mutation = useMutation(async (user) => login(user), {
        onSuccess: () => {
            navigate("/");
            toast.success("Logged in successfully", {
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
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = () => {
        mutation.mutate(user);
        localStorage.setItem("username", user.username);
    };

    return (
        <div>
            <div class="bg-texture  relative bg-purple-100 backdrop-blur flex justify-center items-center bg-texture bg-cover py-28 sm:py-0">
                <div class="p-4 sm:p-8 flex-1 mt-10">
                    <div class="max-w-[420px] min-w-[320px] bg-white rounded-b-3xl mx-auto">
                        <div class="relative h-auto">
                            <svg
                                class="absolute -top-20 "
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                            >
                                <path
                                    fill="#fff"
                                    fill-opacity="1"
                                    d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                ></path>
                            </svg>
                            <div class="absolute bottom-5 right-2">
                                <a
                                    href="#!"
                                    class="block transition hover:rotate-180"
                                >
                                    {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-8 w-8 stroke-current text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                              >
                                  <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1"
                                      d="M6 18L18 6M6 6l12 12"
                                  />
                              </svg> */}
                                </a>
                            </div>
                        </div>
                        <div class="px-10 pt-4 pb-8 rounded-3xl shadow-xl">
                            <div class="mx-auto text-center">
                                <h1 class="text-3xl text-gray-800 mb-8 mt-12">
                                    LOGIN
                                </h1>
                            </div>
                            <form action="" method="POST">
                                <div class="relative">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={onChangeHandler}
                                        class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent "
                                    />
                                    <label
                                        for="username"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0.5 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm"
                                    >
                                        Username
                                    </label>
                                </div>
                                <div class="mt-10 relative">
                                    <input
                                        id="password"
                                        type={inputType}
                                        name="password"
                                        onChange={onChangeHandler}
                                        class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent "
                                    />
                                    <label
                                        for="password"
                                        class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0.5 peer-focus:-top-5 peer-focus:text-black peer-focus:text-sm"
                                    >
                                        Password
                                    </label>
                                    <span className="password-icon absolute right-2 top-0">
                                        <img />
                                    </span>
                                    <div className="flex mt-1">
                                        <input
                                            type="checkbox"
                                            className="mr-1 text-sm mt-1"
                                        ></input>
                                        <h1 className="text-sm mt-1">
                                            Remember Me
                                        </h1>
                                        <a
                                            className="text-sm absolute top-7 right-2 mt-1"
                                            href="#!"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={onSubmitHandler}
                                    class="w-full mt-5 py-4 text-lg text-white font-semibold text-center rounded-full bg-blue transition-all hover:bg-green-700 focus:outline-none"
                                >
                                    Login
                                </button>
                                <p class="text-center text-sm text-gray-400 mt-4">
                                    Don't have an account?{" "}
                                    <a
                                        href="/register"
                                        class="font-semibold text-blue-600 hover:underline"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
