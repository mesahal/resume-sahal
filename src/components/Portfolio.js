import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Work from "./Work";
import Education from "./Education";
import Blog from "./Blog";
import Contact from "./Contact";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronUp,
  Trophy,
  ExternalLink,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MessageSquare,
  GraduationCap,
  Calendar,
  Building2,
  Code2,
} from "lucide-react";
import { Github as GitHub, Terminal, Binary, Cpu } from "lucide-react";
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle dark mode and apply it to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Show scroll-to-top button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const sections = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  // Animation variants
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
  const floatingIcons = [
    { icon: <Terminal size={24} />, delay: "0" },
    { icon: <Code2 size={24} />, delay: "1000" },
    { icon: <Binary size={24} />, delay: "2000" },
    { icon: <Cpu size={24} />, delay: "3000" },
  ];
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1522252234503-e356532cafd5')] bg-cover bg-fixed bg-center before:content-[''] before:absolute before:inset-0 before:bg-gray-900/85">
      {/* Animated Background Icons */}
      {/* {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute text-white"
          style={{
            animation: `float 15s infinite linear`,
            // animationDelay: `${item.delay}ms`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {item.icon}
        </div>
      ))} */}

      {/* Navigation Bar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed top-0 w-full z-50 bg-opacity-95 backdrop-blur-md border-b transition-colors duration-300 dark:bg-gray-900/95 dark:border-gray-800 bg-white/95 border-gray-200"
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
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Sahal
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
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
                  className="cursor-pointer transition-all duration-200 hover:text-orange-500 relative group dark:text-gray-300 dark:hover:text-orange-500"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full transition-colors duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
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
              className="md:hidden p-2 rounded-lg transition-colors duration-200 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
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
                    className="block py-2 px-4 cursor-pointer transition-colors duration-200 rounded-lg dark:text-gray-300 dark:hover:text-orange-500 dark:hover:bg-gray-800 hover:bg-gray-100"
                  >
                    {label}
                  </Link>
                ))}

                {/* Theme Toggle Button for Mobile */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full py-2 px-4 flex items-center space-x-2 rounded-lg transition-colors duration-200 dark:hover:bg-gray-800 hover:bg-gray-100"
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
      {sections.map(({ id }) => (
        <motion.section
          key={id}
          id={id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-screen pt-20 px-4 md:px-6 lg:px-8"
        >
          {id === "home" && <Home />}
          {id === "experience" && <Experience />}
          {id === "achievements" && <Achievements />}
          {id === "work" && <Work />}
          {id === "education" && <Education />}
          {id === "blog" && <Blog />}
          {id === "contact" && <Contact />}
        </motion.section>
      ))}

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
                className="p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
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

// Individual Components (Home, Experience, Achievements, etc.) go here...
