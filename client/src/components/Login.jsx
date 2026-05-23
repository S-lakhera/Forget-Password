import React, { useState } from "react";
import { Link } from "react-router";
import axiosInstance from "../api/axios";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/user/login", formData);

      console.log(response.data)

    } catch (error) {

      console.log(error.response.data)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl"
      >

        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mb-8">
          Login to continue
        </p>

        <div className="space-y-5">

          <div>
            <label className="text-sm text-zinc-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="/auth/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl text-white font-semibold"
          >
            Login
          </button>

          <p className="text-center text-zinc-400 text-sm">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-blue-400 hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

      </form>

    </div>
  );
};

export default Login;