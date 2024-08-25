import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
