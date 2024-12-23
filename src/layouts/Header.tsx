// import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
// import { cn } from "../lib/utils";
// import { useTheme } from "../hooks/use-theme";
// interface HeaderProps {
//     collapsed: boolean;
//     setCollapsed: (value: boolean) => void;
// }

import Tab from "@/components/Tab";
import { dummyUsers, navbarLinks } from "@/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [Open, setOpen] = useState(false);

const toggleSidebar = () => {
  setOpen(!Open);
};


    return (
        <header className=" md:hidden sticky z-[100] h-[64px] inset-x-0 top-0 items-center justify-between bg-white px-4 shadow-sm transition-all duration-300 ease-linear">
        <div className="flex h-[64px] items-center justify-between border-b border-zinc-200">
            <Link to="/" className="flex gap-x-3  items-center justify-center">
            <img src="logo-dark.png" alt="Logoipsum" className="dark:hidden" />
        <p className="block font-satoshi text-2xl font-medium text-slate-900 transition-colors dark:text-slate-50 ">
          CodeAnt AI
        </p>
            </Link>
            <div className=" h-full flex items-center space-x-4 cursor-pointer">
                <img src={!Open ? "bars.png" : "close.png"}  alt="bars" onClick={toggleSidebar}/>
            </div>
        </div>

        {Open && (
          <>
            <div 
              className="fixed top-12 left-0 right-0 bottom-0 bg-black opacity-15 z-30" 
              onClick={toggleSidebar} 
            />
            <div className="top-12 left-0 w-full absolute bg-white z-40 md:hidden">
              <div className="px-4 pt-6">
                <select
                  className="w-full outline-none bg-white border p-2 rounded"
                >
                  {dummyUsers.map((user) => (
                    <option value={user.value} key={user.value}>
                      {user.label}
                    </option>
                  ))}
                </select>
              </div>

              <nav className="flex w-full flex-col p-4">
                {navbarLinks.map((link) => (
                  <Tab
                    key={link.label}
                    icon={<link.icon size={22} className="flex-shrink-0" />}
                    label={link.label}
                    path={link.path}
                  //   className={index === navbarLinks.length - 2 ? "mt-auto" : ""} 
                  />
                ))}
              </nav>
            </div>
          </>
        )}
        </header>
    );
};
