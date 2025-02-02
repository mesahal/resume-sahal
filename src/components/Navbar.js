import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Sahal</div>
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-orange-500">
            Home
          </Link>
          <Link to="/experience" className="text-white hover:text-orange-500">
            Experience
          </Link>
          <Link to="/achievements" className="text-white hover:text-orange-500">
            Achievements
          </Link>
          <Link to="/work" className="text-white hover:text-orange-500">
            Work
          </Link>
          <Link to="/education" className="text-white hover:text-orange-500">
            Education
          </Link>
          <Link to="/blog" className="text-white hover:text-orange-500">
            Blog
          </Link>
          <Link to="/contact" className="text-white hover:text-orange-500">
            Contact
          </Link>
        </div>
        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
