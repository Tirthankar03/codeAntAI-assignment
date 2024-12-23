import { Header } from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";
const Layout = () => {

  return (
    <div
      className={cn("font-inter transition-colors", {
        "debug-screens": process.env.NODE_ENV === "development",
      })}
    >
      <Header />
      <div className="grid grid-cols-[242px,1fr]">
        <Sidebar />

        <div className="col-span-full min-h-screen  bg-[#FAFAFA] md:col-span-1 md:p-6">
          <div className="md:rounded-xl border min-h-[calc(100vh-64px)] border-gray-200 bg-white shadow-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
