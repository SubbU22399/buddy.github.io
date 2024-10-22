import React, { useRef, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("Login");
  const [message, setMessage] = useState(true);
  const Email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const handleRegister = () => {
    if (password.current.value === confirmPassword.current.value) {
      const message = true;
      setMessage(message);
    } else {
      const message = false;
      setMessage(message);
    }
  };
  return (
    <div className=" flex justify-center items-center bg-white rounded-lg mt-44 mx-auto">
      <div className=" w-[400px] h-[400px] ">
        <div className="flex items-center justify-center">
          <h1 className="font-bold justify-center text-4xl m-2 text-pretty text-blue-500 text-opacity-30 ">
            Welcome To Buddy
          </h1>
        </div>
        <div className="flex justify-between m-2 relative bg-gradient-to-tl from-slate-900 rounded-md p-1">
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
            <div className=" m-2 bg-gradient-to-tl from-slate-900 rounded-md p-2 ">
              <h2 className=" font-bold ">Email</h2>
              <input
                type="text"
                placeholder="Email"
                className=" w-full p-2 mb-4 mt-1 rounded-md outline "
              />
              <h2 className=" font-bold ">Password</h2>
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
            <div className=" m-2 bg-gradient-to-tl from-slate-900 rounded-md p-2 ">
              <form onSubmit={(e) => e.preventDefault()}>
                <h2 className=" font-bold ">Name</h2>
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-full p-2 mb-4 rounded-md outline"
                />
                <h2 className=" font-bold ">Email</h2>
                <input
                  ref={Email}
                  type="text"
                  placeholder="Email"
                  className=" w-full p-2 mb-4 rounded-md outline"
                />
                <h2 className=" font-bold ">Password</h2>
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className=" w-full p-2 mb-4 rounded-md outline"
                />
                <div className="flex justify-between items-center">
                  <h2 className=" font-bold ">Confirm Password</h2>
                  {!message && (
                    <FiAlertCircle className="text-red-500 font-bold" />
                  )}
                </div>
                <input
                  ref={confirmPassword}
                  type="password"
                  placeholder="Confirm Password"
                  className={
                    " w-full p-2 mb-4 rounded-md outline " +
                    (message === true ? " " : " outline-red-500 ")
                  }
                />

                <button
                  className="w-full p-2 bg-blue-500 text-white mt-1 hover:bg-green-400 "
                  onClick={handleRegister}
                >
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
