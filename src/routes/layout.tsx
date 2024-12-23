// import { Outlet } from "react-router-dom"

import { Header } from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

// import { cn } from "../lib/utils"
// import { Sidebar } from "../layouts/Sidebar"
// import { useMediaQuery } from "@uidotdev/usehooks"
// import { useEffect, useRef, useState } from "react"
// import { Header } from "../layouts/Header"
// import { useClickOutside } from "../hooks/use-click-outside"

const Layout = () => {
  // const sidebarRef = useRef(null);
  // const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  // const [collapsed, setCollapsed] = useState(!isDesktopDevice);

  //this time we are going to have navbar ref

  // console.log(collapsed)

  // useEffect(() => {
  //     setCollapsed(!isDesktopDevice);
  // }, [isDesktopDevice]);

  // useClickOutside([sidebarRef], () => {
  //     if (!isDesktopDevice && !collapsed) {
  //         setCollapsed(true);
  //     }
  // });
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
