import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Layout = () => {
  return (
    <div className="font-sand min-h-screen bg-gray-200 overflow-hidden">
      <Header />
      <div className="container px-2 mx-auto pt-14 pb-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
