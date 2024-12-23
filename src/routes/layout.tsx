// import { Outlet } from "react-router-dom"

import { Header } from "@/layouts/Header"
import Sidebar from "@/layouts/Sidebar"
import { cn } from "@/lib/utils"
import { Outlet } from "react-router-dom"

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

    <div className={cn("transition-colors font-inter", {"debug-screens": process.env.NODE_ENV === "development"})}>

            <Header/>
            <div className="grid grid-cols-[242px,1fr]">
            <Sidebar/>


            <div className="min-h-screen overflow-y-auto overflow-x-hidden p-6  col-span-full md:col-span-1 bg-[#FAFAFA] ">
            <div className="p-6 bg-white  rounded-xl  border border-gray-200 shadow-md">
                <Outlet />
            </div>
            </div>
            </div>
    </div>
  )
}

export default Layout