import React from "react";
import { Github } from "lucide-react";
import { Link } from "react-router";

export const Navbar = () => {
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
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  className="text-base text-[#000000] hover:text-[#632EE3] font-semibold leading-[152%] border-b-2 border-transparent hover:border-[#9F62F2] transition-all duration-300"
                >
                  <a className="">{menu.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <a
          className="text-base font-bold leading-6 flex justify-center items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text"
          href="#"
        >
          <img
            src="/src/assets/logo.png"
            alt="App Logo"
            height={40}
            width={40}
          />
          HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 flex gap-8">
          {menus.map((menu, index) => {
            return (
              <Link to={menu.path}>
                <li
                  key={index}
                  className="text-base text-[#000000] hover:text-[#632EE3] font-semibold leading-[152%] border-b-2 border-transparent hover:border-[#9F62F2] transition-all duration-300"
                >
                  <a className="">{menu.name}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn text-base shadow-none text-white font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-0 flex gap-2.5 rounded-[4px] px-4 py-3"
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
