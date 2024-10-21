import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Regestration/Auth";

const Chat = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Chat;
