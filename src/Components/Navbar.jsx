"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ImStatsDots } from "react-icons/im";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";

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

  return (
    <div className="shadow-sm border-b border-opacity-10">
      <div className="navbar container mx-auto">
        <div className="flex-1 items-center">
          <Link href="/" className=" text-md">
            KeenKeeper
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                className={` ${pathname === "/" ? "bg-[#244d3f] hover:bg-[#244d3f] text-white" : ""} flex items-center gap-1 `}
              >
                <span className="text-2xl dark:text-wh">
                  {" "}
                  <RiHome2Line />
                </span>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/time-line" ? "bg-[#244d3f] hover:bg-[#244d3f] text-white" : ""}`}
                href="/time-line"
              >
                {" "}
                <span className="text-2xl">
                  {" "}
                  <RiTimeLine />
                </span>{" "}
                Time Line
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/stats" ? "bg-[#244d3f] hover:bg-[#244d3f] text-white" : ""}`}
                href="/stats"
              >
                {" "}
                <span className="text-2xl">
                  {" "}
                  <ImStatsDots />
                </span>
                Stats
              </Link>
            </li>
          </ul>

          {/* থিম টগল বাটন */}
          <input
            type="checkbox"
            onChange={handleThemeToggle}
            checked={theme === "dark"}
            className="toggle toggle-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
