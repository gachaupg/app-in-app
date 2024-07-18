// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from "../assets/logo.svg";

const Reset = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">  
      <h2 className="text-2xl font-semibold mb-2 mx-auto">Forgot Password</h2>
      <h3 className="text-gray-600 mb-6 mx-auto ">Create your New Passwords </h3>

        <div className="mb-4">
            <label htmlFor="password" className="sr-only">
            Password
            </label>
            <input
            type="password"
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 "
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Enter new Password"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="sr-only">
             Confirm Password
            </label>
            <input
            type="password"
            className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300 "
            name="confirmpassword"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
            />
        </div>

        <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
            Reset
        </button>
    </div>
      );
    };
    
    export default Reset;