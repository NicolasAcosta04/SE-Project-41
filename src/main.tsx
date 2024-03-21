import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Timesheet from "./pages/consultant/Timesheet";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/consultant/timesheet",
    element: <Timesheet />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
