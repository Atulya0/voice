import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";

export const Layout = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Sidebar />
      
      <div className="ml-64 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <div className="h-20 bg-black flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-20">
          <img
            className="w-[194px] h-[46px]"
            alt="Group"
            src="/group-1.png"
          />

          <div className="flex items-center gap-6">
            <div className="w-6 h-6 relative">
              <img
                className="w-5 h-[17px]"
                alt="Vector"
                src="/vector-3.svg"
              />
              <img
                className="absolute w-[5px] h-[3px] top-5 left-[9px]"
                alt="Vector"
                src="/vector-2.svg"
              />
            </div>

            <div className="w-px h-[29px] bg-gray-600" />

            <div className="flex items-center gap-4">
              <div className="font-inter font-medium text-white text-lg">
                User1254
              </div>
              <Avatar className="w-[51px] h-[51px] bg-white">
                <AvatarImage
                  src="/ellipse-2.svg"
                  alt="User avatar"
                  className="w-[46px] h-[46px] object-cover"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="w-6 h-6">
                <img
                  className="w-3.5 h-2"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="pt-20 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};