import React, { useState } from "react";
import { login } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import Logo from "../images/simple.png";
import eyeOff from "../images/eye-off.svg";
import eye from "../images/eye.svg";
import jwtDecode from "jwt-decode";

function Login() {
    const decoded = localStorage.getItem("token")
        ? jwtDecode(localStorage.getItem("token"))
        : null;
    let navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const [icon, setIcon] = useState(eye);
    const [inputType, setInputType] = useState("password");

    const togglePassword = () => {
        if (inputType === "password") {
            setInputType("text");
            setIcon(eyeOff);
        } else {
            setInputType("password");
            setIcon(eye);
        }
    };

    const mutation = useMutation(async (user) => login(user), {
        onSuccess: () => {
            var dec = jwtDecode(localStorage.getItem("token"));
            dec.data.isAdmin ? navigate("/dashboard") : navigate("/dashboard2");

            window.location.reload();
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

    const onSubmitHandler = (e) => {
        mutation.mutate(user);
        localStorage.setItem("username", user.username);
    };

    return (
        <div className="background z-0">
            <div class="bg-texture relative  flex justify-center items-center bg-texture bg-cover py-28 sm:py-0">
                <div class="p-4 sm:p-8 flex-1 mt-5">
                    <div class="max-w-[420px] min-w-[320px] rounded-t-3xl mx-auto mt-32 ml-20">
                        <div class="px-10 pt-4 pb-8 rounded-3xl shadow-xl bg-white">
                            <div class="mx-auto text-center">
                                <h1 class="text-3xl text-gray-800 mb-8 mt-12">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="w-46 h-12 ml-28 pb-2 z-1 animate-pulse"
                                    />
                                </h1>
                            </div>

                            <form action="" method="POST">
                                <div class="relative">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={onChangeHandler}
                                        class="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent"
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
                                    <span className="password-icon absolute right-2 top-1.25 ">
                                        <img
                                            src={icon}
                                            alt="icon"
                                            onMouseDown={togglePassword}
                                            className="h-5"
                                        />
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
                                    class="w-full mt-12 py-4 text-lg text-white  text-center rounded-full bg-blue transition-all hover:bg-sky-700 focus:outline-none"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
