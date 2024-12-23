import React from "react";
import { NavLink } from "react-router-dom";

interface Option {
  label: string;
  path: string;
}

interface OptionsProps {
  options: Option[];
}

const Options: React.FC<OptionsProps> = ({ options }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 ">
      {options.map((option, index) => (
        <NavLink
          key={index}
          to="/"
          className="flex w-full items-center justify-center gap-x-3 border px-6 py-4 lg:max-w-[447px] rounded-lg hover:bg-slate-100 transition-all ease-linear cursor-pointer"
        >
          <img src={option.path} alt={option.label} />
          <p>{option.label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Options;
