import React, { useState } from "react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("Login");
  return (
    <div className="w-[400px] h-[400px]">
      <div className="w-[400px] h-[400px] mt-10">
        <div className="flex justify-between items-center mb-4 ">
          <button className="px-4 py-2 " onClick={() => setActiveTab("Login")}>
            Login
          </button>
          <button
            className="px-4 py-2"
            onClick={() => setActiveTab("Register")}
          >
            Register
          </button>
        </div>
        <div>
          {activeTab === "Login" && (
            <div className="flex relative">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 mb-
                      4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-
                      4"
              />
              <button className="w-full p-2 bg-blue-500 text-white">
                Login
              </button>
            </div>
          )}
          {activeTab === "Register" && (
            <div className="">
              <input
                type="text"
                placeholder="Email"
                className="w-full p-2 mb-
                          4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-
                          4"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 mb-
                              4"
              />
              <button className="w-full p-2 bg-blue-500 text-white">
                {" "}
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
