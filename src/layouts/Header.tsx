// import { Bell, ChevronsLeft, Moon, Search, Sun } from "lucide-react";
// import { cn } from "../lib/utils";
// import { useTheme } from "../hooks/use-theme";
// interface HeaderProps {
//     collapsed: boolean;
//     setCollapsed: (value: boolean) => void;
// }

import { Link } from "react-router-dom";

export const Header = (
    // { collapsed, setCollapsed }: HeaderProps
) => {
    // const { theme, setTheme } = useTheme();

    return (
        <header className=" md:hidden sticky z-[100] h-[64px] inset-x-0 top-0 items-center justify-between bg-white px-4 shadow-md">
        <div className="flex h-[64px] items-center justify-between border-b border-zinc-200">
            <Link to="/">
                <img src="logo-dark.png" alt="CodeAnt AI" className="dark:hidden" />
            </Link>
            <div className=" h-full flex items-center space-x-4">
                <img src="bars.png" alt="bars" />
            </div>
        </div>
        </header>
    );
};
