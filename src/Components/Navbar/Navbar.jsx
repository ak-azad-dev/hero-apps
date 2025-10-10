import React from "react";
import { Github } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useLocation } from "react-router";
import Logo from "../../assets/logo.png";

export const Navbar = () => {
  const location = useLocation();
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Apps",
      path: "/apps",
    },
    {
      name: "Installation",
      path: "/installation",
    },
  ];
  return (
    <div className="navbar bg-[#FFFFFF] shadow-sm border-1 border-b-[#E9E9E9] h-[78px] mx-auto md:px-10 fixed top-0 left-0 w-full z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden bg-transparent border-none p-2 text-[#000] hover:bg-transparent hover:border-none hover:shadow-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menus.map((menu, index) => {
              const isActive = location.pathname === menu.path;
              return (
                <li
                  key={index}
                  className={`text-base font-semibold leading-[152%] border-b-2 transition-all duration-300 ${
                    isActive
                      ? "text-[#632EE3] border-[#9F62F2]"
                      : "text-[#000000] border-transparent hover:text-[#632EE3] hover:border-[#9F62F2]"
                  }`}
                >
                  <Link to={menu.path}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <a
          className="text-[18px] md:text-[20px] font-bold leading-6 flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text"
          href="/"
        >
          <img src={Logo} alt="App Logo" height={40} width={40} />
          SwiftApps
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 flex gap-8">
          {menus.map((menu, index) => {
            const isActive = location.pathname === menu.path;
            return (
              <li
                key={index}
                className={`text-base font-semibold leading-[152%] border-b-2 transition-all duration-300 ${
                  isActive
                    ? "text-[#632EE3] border-[#9F62F2]"
                    : "text-[#000000] border-transparent hover:text-[#632EE3] hover:border-[#9F62F2]"
                }`}
              >
                <Link to={menu.path}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <a
          className="btn text-base shadow-none text-white font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2]
          border-0 flex gap-2.5 rounded-[4px] px-4 py-3 transition duration-300 ease-in transform hover:scale-105"
          href="https://github.com/ak-azad-dev"
          target="_blank"
        >
          <Github />
          Contribute
        </a>
      </div>
    </div>
  );
};
