import React from "react";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Inbox",
    path: "/consultant/inbox",
    icon: <BsIcons.BsInbox />,
    cName: "nav-text",
  },
  {
    title: "Timesheet",
    path: "/consultant/timesheet",
    icon: <BsIcons.BsTable />,
    cName: "nav-text",
  },
  {
    title: "Tags",
    path: "/consultant/tags",
    icon: <BsIcons.BsTags />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/consultant/settings",
    icon: <BsIcons.BsSliders />,
    cName: "nav-text",
  },
];
