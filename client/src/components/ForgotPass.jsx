import React, { useState } from "react";
import { Link } from "react-router";
import axiosInstance from "../api/axios";

const ForgotPass = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let response = await axiosInstance.post("/user/forget-password",{email:email})
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl"
      >

        <h1 className="text-3xl font-bold text-white mb-2">
          Forgot Password
        </h1>

        <p className="text-zinc-400 mb-8">
          Enter your registered email
        </p>

        <div className="space-y-5">

          <div>
            <label className="text-sm text-zinc-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl text-white font-semibold"
          >
            Send Reset Link
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

export default ForgotPass;