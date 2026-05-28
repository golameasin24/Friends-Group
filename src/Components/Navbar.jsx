"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImStatsDots } from "react-icons/im";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathname === "/" ? "bg-[#244d3f] hover:bg-[#244d3f] text-white" : ""} flex items-center gap-1`}
        >
          <span className="text-xl">
            <RiHome2Line />
          </span>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/time-line"
          className={`${pathname === "/time-line" ? "bg-[#244d3f] hover:bg-[#244d3f] text-white" : ""}`}
        >
          <span className="text-xl">
            <RiTimeLine />
          </span>
          Time Line
        </Link>
      </li>
      <li>
        <Link
          href="/stats"
          className={`${pathname === "/stats" ? "bg-[#244d3f] hover:bg-[#244d3f] text-white" : ""}`}
        >
          <span className="text-xl">
            <ImStatsDots />
          </span>
          Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="shadow-sm border-b border-opacity-10 bg-base-100">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 min-h-0 h-auto mr-2"
            >
              <FiMenu className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200"
            >
              {navLinks}
            </ul>
          </div>
          <Link href="/" className="text-lg font-bold tracking-wider">
            KeenKeeper
          </Link>
        </div>

        <div className="navbar-end w-full flex justify-end items-center gap-2">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
          </div>

          <input
            type="checkbox"
            onChange={handleThemeToggle}
            checked={theme === "dark"}
            className="toggle toggle-primary ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
