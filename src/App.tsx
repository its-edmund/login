import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center w-full max-w-ws h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-auto w-1/4">
        <div className="mb-4">
          <label className="text-gray-700">Username</label>
          <input
            type="text"
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700">Password</label>
          <input
            type="password"
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
