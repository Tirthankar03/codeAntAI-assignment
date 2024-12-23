import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { BsGear } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";


export const navbarLinks = [
    {
        label: "Repositories",
        icon: AiOutlineHome,
        path: "/",
    },
    {
        label: "AI Code Review",
        icon: FaCode,
        path: "/review",
    },
    {
        label: "Cloud Security",
        icon: CiCloudOn,
        path: "/cloud-security",
    },
    {
        label: "How to use",
        icon: LuBookText,
        path: "/how-to-use",
    },
    {
        label: "Settings",
        icon: BsGear,
        path: "/settings",
    },
    {
        label: "Support",
        icon: LuPhone,
        path: "/support",
    },
    {
        label: "Logout",
        icon: MdOutlineLogout,
        path: "/logout",
    },
];

export const repositories = [
    {
      name: "design-system",
      access: "Public",
      languages: "React",
      size: "2.6 MB",
      updates: "3",
    },
    {
      name: "codeant-ci-app",
      access: "Private",
      languages: "Javascript",
      size: "1.2 MB",
      updates: "2",
    },
    {
      name: "analytics-dashboard",
      access: "Public",
      languages: "Python",
      size: "4521 KB",
      updates: "5",
    },
    {
      name: "mobile-app",
      access: "Private",
      languages: "Swift",
      size: "4.6 MB",
      updates: "3",
    },
    {
      name: "e-commerce-website",
      access: "Private",
      languages: "React",
      size: "2.6 MB",
      updates: "3",
    },
    {
      name: "blog-website",
      access: "Public",
      languages: "Javascript",
      size: "16120 KB",
      updates: "4",
    },
    {
      name: "social-network",
        access: "Private",
        languages: "PHP",
        size: "5432 KB",
        updates: "3",
    },
];