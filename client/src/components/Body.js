import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./RegistrationComponents/SignIn";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
  ]);
  return <div></div>;
};

export default Body;
