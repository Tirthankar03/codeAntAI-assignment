// import { NavLink } from "react-router-dom";
// import { cn } from "../lib/utils"

import Tab from "@/components/Tab";
import { navbarLinks } from "@/constants";

// import { forwardRef, HTMLAttributes } from "react"
// import { navbarLinks } from "../constants";
// interface SidebarProps extends HTMLAttributes<HTMLElement> {
//     collapsed?: boolean;
// }

// export const Sidebar = forwardRef<HTMLElement, SidebarProps>(({ collapsed }, ref) => {

export const Sidebar = () => {
  return (
    <aside className="hidden bg-white md:block">
      <div className="flex gap-x-3 mt-6 mx-5">
        <img src="logo-dark.png" alt="Logoipsum" className="dark:hidden" />
        <p className="hidden font-satoshi text-2xl font-medium text-slate-900 transition-colors dark:text-slate-50 sm:block">
          CodeAnt AI
        </p>
      </div>
      <nav className="flex h-[calc(100vh-64px)]  w-full flex-col p-4  
      ">
          {navbarLinks.map((link, index) => (
            <Tab
              key={link.label}
              icon={<link.icon size={22} className="flex-shrink-0" />}
              label={link.label}
              path={link.path}
              className={index === navbarLinks.length - 2 ? "mt-auto" : ""} 
            />
          ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
