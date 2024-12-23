import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface TabProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  className?: string;
}

const Tab: React.FC<TabProps> = ({ icon, label, path, className }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        cn(
          ' transition-all ease-in duration-150 border-0 flex text-[16px] py-2.5 px-3.5 font-semibold flex-row items-center justify-start pl-5 pr-8 gap-4  rounded-lg cursor-pointer',
          {
            'bg-[#1470ef] text-white ': isActive,
            'bg-white text-[#414651] hover:bg-[#F5F5F5]': !isActive,
          },
          className
        )
      }
    >
      <div className="text-xl">{icon}</div>
      <p>{label}</p>
    </NavLink>
  );
}

export default Tab;