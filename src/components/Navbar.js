import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "Experience" },
    { path: "/achievements", label: "Achievements" },
    { path: "/work", label: "Work" },
    { path: "/education", label: "Education" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Sahal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110
                  ${
                    index % 3 === 0
                      ? "hover:text-purple-400"
                      : index % 3 === 1
                      ? "hover:text-pink-400"
                      : "hover:text-red-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700/50">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 text-gray-300 transition-all duration-300
                  hover:bg-gray-700/50 hover:pl-6
                  ${
                    index % 3 === 0
                      ? "hover:text-purple-400"
                      : index % 3 === 1
                      ? "hover:text-pink-400"
                      : "hover:text-red-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
