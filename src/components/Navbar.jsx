import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/mergelogo.png";

const Navbar = () => {
  const activeClass =
    "bg-yellow-400 text-black rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold";
  const normalClass =
    "text-sm font-bold hover:text-yellow-400 transition";

  return (
    <nav className="fixed top-4 inset-x-4 h-16 bg-background/80 backdrop-blur-md border border-gray-200/50 max-w-7xl mx-auto rounded-full z-50 shadow-lg shadow-gray-900/5">
      <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition "
          aria-label="Merge Home"
        >
          <img
            src={Logo}
            alt="Merge Logo"
            className="h-10 w-auto object-contain hidden md:block rounded-full"
          />
          <span className="font-bold text-xs sm:text-lg text-yellow-400">
            MERGE SEED
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
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
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-gray-300"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className="hidden md:hidden absolute top-20 inset-x-4 bg-background border border-gray-200 rounded-2xl p-4 shadow-lg"
      >
        <div className="flex flex-col gap-3 items-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : "hover:text-yellow-400"
            }
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : "hover:text-yellow-400"
            }
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeClass : "hover:text-yellow-400"
            }
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClass : "hover:text-yellow-400"
            }
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
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
