

import Tab from "@/components/Tab";
import { dummyUsers, navbarLinks } from "@/constants";
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../store/userSlice';
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setUsername(event.target.value));
  };

  return (
    <aside className="hidden bg-white md:block">
      <Link to="/" className="flex gap-x-3 mt-6 mx-5 cursor-pointer">
        <img src="logo-dark.png" alt="Logoipsum" className="dark:hidden" />
        <p className="hidden font-satoshi text-2xl font-medium text-slate-900 transition-colors dark:text-slate-50 sm:block">
          CodeAnt AI
        </p>
      </Link>

    <div className=" mx-5 mt-5 ">
            <select
              className="w-full outline-none h-full p-2  bg-white border  rounded-md"
              onChange={handleUsernameChange}
            >
              {dummyUsers.map((user) => (
                <option value={user.value} key={user.value}>
                  {user.label}
                </option>
              ))}
            </select>
          </div>

      <nav className="flex h-[calc(100vh-128px)]  w-full flex-col p-4  
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
