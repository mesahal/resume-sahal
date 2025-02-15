import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Work from "./Work";
import Education from "./Education";
import Blog from "./Blog";
import Videos from "./Videos";
import Contact from "./Contact";
import FloatingIcons from "./FloatingIcons";
import { Sun, Moon, Menu, X, ChevronUp } from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
    { id: "videos", label: "Videos" },
    { id: "contact", label: "Contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className={`min-h-screen bg-[url('https://images.unsplash.com/photo-1522252234503-e356532cafd5')] bg-cover bg-fixed bg-center before:content-[''] before:absolute before:inset-0 ${
        darkMode ? "before:bg-gray-900/85" : "before:bg-gray-50/90"
      }`}
    >
      {/* Navigation Bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 
          ${
            darkMode
              ? "bg-gray-900/95 border-gray-800 text-gray-100"
              : "bg-white/95 border-gray-200 text-gray-800"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-2xl font-bold cursor-pointer relative group"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Sahal
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map(({ id, label }) => (
                <Link
                  key={id}
                  to={id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer transition-all duration-200 hover:text-purple-400 relative group 
                    ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
                  ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
                ${
                  darkMode
                    ? "hover:bg-gray-800 text-gray-300"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                className="md:hidden py-4 space-y-2"
              >
                {sections.map(({ id, label }) => (
                  <Link
                    key={id}
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 cursor-pointer transition-colors duration-200 rounded-lg
                      ${
                        darkMode
                          ? "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                          : "text-gray-600 hover:text-purple-600 hover:bg-gray-100"
                      }`}
                  >
                    {label}
                  </Link>
                ))}

                {/* Theme Toggle Button for Mobile */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-full py-2 px-4 flex items-center space-x-2 rounded-lg transition-colors duration-200
                    ${
                      darkMode
                        ? "hover:bg-gray-800 text-yellow-400"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Sections */}
      <div className={darkMode ? "dark" : ""}>
        {sections.map(({ id }) => (
          <motion.section
            key={id}
            id={id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`min-h-screen pt-20 px-4 md:px-6 lg:px-8 relative overflow-hidden
              ${darkMode ? "text-gray-100" : "text-gray-800"}`}
          >
            {/* Floating Icons Background */}
            <FloatingIcons darkMode={darkMode} />

            {/* Section Content */}
            <div className="relative z-10">
              {id === "home" && <Home darkMode={darkMode} />}
              {id === "experience" && <Experience darkMode={darkMode} />}
              {id === "achievements" && <Achievements darkMode={darkMode} />}
              {id === "work" && <Work darkMode={darkMode} />}
              {id === "education" && <Education darkMode={darkMode} />}
              {id === "blog" && <Blog darkMode={darkMode} />}
              {id === "videos" && <Videos darkMode={darkMode} />}
              {id === "contact" && <Contact darkMode={darkMode} />}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Link to="home" spy={true} smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:from-purple-500 hover:to-pink-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                aria-label="Scroll to top"
              >
                <ChevronUp size={24} />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
