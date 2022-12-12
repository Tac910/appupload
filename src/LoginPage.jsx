import React from 'react';

function LoginForm() {
  return (
    <form className="mx-auto mt-10 max-w-sm">
      <div className="mb-4">
        <label
          className="block font-bold text-gray-700 text-sm mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          id="username"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-bold text-gray-700 text-sm mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          id="password"
          type="password"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
