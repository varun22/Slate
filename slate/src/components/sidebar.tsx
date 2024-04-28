import { Open_Sans } from "next/font/google";
import { IoMdCloudUpload } from "react-icons/io";
import { TbNotes } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { BsChatDots } from "react-icons/bs";
import { HiChartSquareBar } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-opensans",
});

import React from "react";

const Navigation = () => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform translate-x-full bg-white sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/summarize"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoMdCloudUpload />
                <span className="ms-3">Upload</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RxDashboard />
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TbNotes />
                <span className="flex-1 ms-3 whitespace-nowrap">My Notes</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BsChatDots />
                <span className="flex-1 ms-3 whitespace-nowrap">Forum</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiChartSquareBar />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Statistics
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoSettingsSharp />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoLogOut />
                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
