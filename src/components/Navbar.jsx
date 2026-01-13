import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-4 inset-x-4 h-16 bg-background/80 backdrop-blur-md border border-gray-200/50 max-w-7xl mx-auto rounded-full z-50 shadow-lg shadow-gray-900/5">
      <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
       
<Link
  to="/"
  className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition"
  aria-label="Merge Home"
>
  <img
    src={Logo}
    alt="Merge Logo"
    className="h-10 w-auto object-contain hidden md:block"
  />
  <span className="font-bold text-xs sm:text-lg text-yellow-400">
    MERGE SEED
  </span>
</Link>

        <div className="flex items-center gap-2 sm:gap-4">
          
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-sm font-light  hover:text-yellow-400">
              Home
            </Link>
            <Link to="/about" className="text-sm font-light  hover:text-yellow-400">
              About
            </Link>
            <button to="/contact" className="bg-yellow-400 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              Contact Us
            </button>
          </div>

         

          
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-slate-600"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className="hidden md:hidden absolute top-20 inset-x-4 bg-background border border-gray-200 dark:border-slate-700 rounded-2xl p-4 shadow-lg"
      >
        <div className="flex flex-col gap-3">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link href="/projects" className="hover:text-yellow-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
