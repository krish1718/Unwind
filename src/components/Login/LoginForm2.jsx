import React from "react";

const LoginForm2 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-xs">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
              Login
            </button>
          </div>
          <hr className="my-4 border-gray-400" />
          <div className="text-center">
            <h2 className="text-lg font-medium mb-4">Sign Up</h2>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm2;
