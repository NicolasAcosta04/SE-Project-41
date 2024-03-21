import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Inbox from "./pages/consultant/Inbox";
import Timesheet from "./pages/consultant/Timesheet";
import Tags from "./pages/consultant/Tags";
import Settings from "./pages/consultant/Settings";

import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/consultant/inbox",
        element: <Inbox />,
      },
      {
        path: "/consultant/timesheet",
        element: <Timesheet />,
      },
      {
        path: "/consultant/tags",
        element: <Tags />,
      },
      {
        path: "/consultant/settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
