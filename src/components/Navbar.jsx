import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/mergelogo.png";

const Navbar = () => {
  const activeClass =
    "bg-yellow-400 text-black rounded-full px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold";
  const normalClass =
    "text-[10px] sm:text-xs font-semibold hover:text-yellow-400 transition whitespace-nowrap";

  return (
    <nav className="fixed top-4 inset-x-4 h-14 sm:h-16 bg-background/80 backdrop-blur-md border border-gray-200/50 max-w-7xl mx-auto rounded-full z-50 shadow-lg shadow-gray-900/5">
      <div className="h-full flex items-center justify-between px-3 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition"
          aria-label="Merge Home"
        >
          <img
            src={Logo}
            alt="Merge Logo"
            className="h-7 sm:h-9 w-auto object-contain rounded-full"
          />
          <span className="font-bold text-[10px] sm:text-sm text-yellow-400 whitespace-nowrap">
            MERGE SEED
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
