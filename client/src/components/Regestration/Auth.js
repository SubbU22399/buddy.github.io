import React, { useState } from "react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("Login");
  return (
    <div className=" flex justify-center items-center bg-white rounded-lg shadow-md h-[60vh] w-[30vw] mt-44 mx-auto">
      <div className="">
        <div className="flex items-center justify-center">
          <h1 className="font-bold justify-center text-5xl m-2 p-2 text-pretty text-cyan-700 text-opacity-30">
            Welcome To Buddy
          </h1>
        </div>
        <div className="flex justify-between m-2 relative">
          <button
            className={
              " px-4 py-2 w-full font-bold " +
              (activeTab === "Login"
                ? "bg-blue-500 text-white rounded-md"
                : "bg-white text-blue-500 hover:bg-green-400 rounded-md")
            }
            onClick={() => setActiveTab("Login")}
          >
            Login
          </button>
          <button
            className={
              " px-4 py-2 w-full font-bold " +
              (activeTab === "Register"
                ? "bg-blue-500 text-white rounded-md"
                : "bg-white text-blue-500  hover:bg-green-400 rounded-md")
            }
            onClick={() => setActiveTab("Register")}
          >
            Register
          </button>
        </div>
        <div>
          {activeTab === "Login" && (
            <div className=" m-2">
              <input
                type="text"
                placeholder="Email"
                className=" w-full p-2 mb-4 mt-1 rounded-md outline "
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 mt-1 rounded-md outline "
              />
              <button className="w-full p-2 bg-blue-500 text-white mt-1 rounded-md hover:bg-green-300">
                Login
              </button>
            </div>
          )}
          {activeTab === "Register" && (
            <div className=" m-2 ">
              <input
                type="text"
                placeholder="Email"
                className=" w-full p-2 mb-4 rounded-md outline"
              />
              <input
                type="password"
                placeholder="Password"
                className=" w-full p-2 mb-4 rounded-md outline"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className=" w-full p-2 mb-4 rounded-md outline"
              />
              <button className="w-full p-2 bg-blue-500 text-white mt-1 hover:bg-green-400">
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
