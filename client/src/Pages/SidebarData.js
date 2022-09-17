import * as FaIcons from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <FaChevronRight />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaChevronRight />,
    cName: "nav-text",

    subNav: [
      {
        title: "Our Aim",
        path: "/about-us/aim",
        icon: <FaChevronRight />,
      },
      {
        title: "Our Vision",
        path: "/about-us/vision",
        icon: <FaChevronRight />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaChevronRight />,
    cName: "nav-text",
  },
];
