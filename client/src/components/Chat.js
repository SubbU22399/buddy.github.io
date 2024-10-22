import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Regestration/Auth";
import Home from "./Home/Home";

const Chat = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Chat;
