import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center w-full">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
