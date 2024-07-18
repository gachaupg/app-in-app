// import React from 'react';
// import { NavLink } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-2 mx-auto">Forgot Password</h2>
      <h3 className="text-gray-600 mb-6 mx-auto ">Enter your email to receive the instruction<br/>to reset your password </h3>

      <div className="mb-4">
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="emailadddress@gmail.com"
          className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
       Reset
      </button>
    </div>
  );
};

export default Forgot;
