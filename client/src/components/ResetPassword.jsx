import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import axiosInstance from "../api/axios";

const ResetPassword = () => {

    const { token } = useParams();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async(e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            return alert("Passwords do not match");

        }
        
        try {
            let response = await axiosInstance.post(`/user/reset-password/${token}`, {password:formData.password})

            console.log(response.data);
            
        } catch (error) {
            console.log(error.response.data);
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl"
            >

                <h1 className="text-3xl font-bold text-white mb-2">
                    Reset Password
                </h1>

                <p className="text-zinc-400 mb-8">
                    Enter your new password
                </p>

                <div className="space-y-5">

                    {/* NEW PASSWORD */}
                    <div>

                        <label className="text-sm text-zinc-300">
                            New Password
                        </label>

                        <div className="relative mt-2">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter new password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-blue-500 pr-12"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                            >
                                {
                                    showPassword
                                        ? <EyeOff size={20} />
                                        : <Eye size={20} />
                                }
                            </button>

                        </div>

                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div>

                        <label className="text-sm text-zinc-300">
                            Confirm Password
                        </label>

                        <div className="relative mt-2">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-blue-500 pr-12"
                            />

                        </div>

                    </div>

                    {/* PASSWORD MATCH MESSAGE */}
                    {
                        formData.confirmPassword.length > 0 &&
                            (
                                formData.password ===
                                formData.confirmPassword
                            ) ? (

                            <p className="text-green-500 text-sm">
                                Passwords match
                            </p>

                        ) : formData.confirmPassword.length > 0 && (

                            <p className="text-red-500 text-sm">
                                Passwords do not match
                            </p>

                        )
                    }

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl text-white font-semibold"
                    >
                        Reset Password
                    </button>

                    <p className="text-center text-zinc-400 text-sm">
                        Back to{" "}
                        <Link
                            to="/auth/login"
                            className="text-blue-400 hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </form>

        </div>
    );
};

export default ResetPassword;