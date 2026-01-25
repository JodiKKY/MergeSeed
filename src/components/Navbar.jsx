import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/mergelogo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeClass =
    "bg-yellow-400 text-black rounded-full px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-sm font-semibold";

  const normalClass =
    "text-[10px] sm:text-sm font-semibold hover:text-[#d5af0e] transition whitespace-nowrap text-gray-200/90";

  return (
<nav className="fixed top-4 inset-x-4 h-14 sm:h-16 
  bg-black/30 dark:bg-slate-950/40 
  backdrop-blur-2xl 
  border border-white/20 dark:border-white/10 
  max-w-7xl mx-auto rounded-full z-50 
  shadow-lg shadow-black/20">

      <div className="h-full flex items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
          aria-label="Merge Home"
        >
          <img
            src={Logo}
            alt="Merge Logo"
            className="h-7 sm:h-9 w-auto object-contain rounded-full"
          />
          <span className="font-bold text-[10px] sm:text-sm text-[#d5af0e] whitespace-nowrap">
            MERGE SEED
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-3">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? activeClass : normalClass)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
          className="sm:hidden text-[#d5af0e] text-xl focus:outline-none mr-3"
        >
         {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

    
     
{/* Mobile Dropdown */}
{open && (
  <div className="sm:hidden absolute top-[4.2rem] right-4 w-44 bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-lg shadow-black/10 px-3 py-3 space-y-2">
    {[
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
    ].map((link) => (
      <NavLink
        key={link.name}
        to={link.path}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          isActive
            ? "block text-center bg-[#d5af0e] text-black rounded-full py-1.5 text-xs font-semibold"
            : "block text-center text-gray-200/90 hover:text-[#d5af0e] text-xs font-semibold transition"
        }
      >
        {link.name}
      </NavLink>
    ))}
  </div>
)}
 </nav>
  );
};

export default Navbar;
