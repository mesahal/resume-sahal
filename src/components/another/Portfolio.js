import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ThreeScene from './ThreeScene';
import Home from '../Home';
import Experience from '../Experience';
import Achievements from '../Achievements';
import Work from '../Work';
import Education from '../Education';
import Blog from '../Blog';
import Contact from '../Contact';

const sections = [
  { id: 'home', component: Home, label: 'Home' },
  { id: 'experience', component: Experience, label: 'Experience' },
  { id: 'achievements', component: Achievements, label: 'Achievements' },
  { id: 'work', component: Work, label: 'Work' },
  { id: 'education', component: Education, label: 'Education' },
  { id: 'blog', component: Blog, label: 'Blog' },
  { id: 'contact', component: Contact, label: 'Contact' }
];

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  // Create refs and inView states for each section at the top level
  const [homeRef, homeInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workRef, workInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [educationRef, educationInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [blogRef, blogInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Map sections to their respective refs and inView states
  const sectionRefs = [
    { ref: homeRef, inView: homeInView },
    { ref: experienceRef, inView: experienceInView },
    { ref: achievementsRef, inView: achievementsInView },
    { ref: workRef, inView: workInView },
    { ref: educationRef, inView: educationInView },
    { ref: blogRef, inView: blogInView },
    { ref: contactRef, inView: contactInView }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <ThreeScene darkMode={darkMode} />

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed top-0 w-full z-50 bg-opacity-95 backdrop-blur-md border-b transition-colors duration-300 
          dark:bg-gray-900/95 dark:border-gray-800 bg-white/95 border-gray-200"
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 
                transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {sections.map(({ id, label }) => (
                <Link
                  key={id}
                  to={id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer transition-all duration-200 hover:text-orange-500 relative group
                    dark:text-gray-300 dark:hover:text-orange-500"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 
                    transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full transition-colors duration-200 
                  dark:bg-gray-800 dark:hover:bg-gray-700 bg-gray-100 hover:bg-gray-200
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200
                dark:hover:bg-gray-800 hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

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
                    className="block py-2 px-4 cursor-pointer transition-colors duration-200 
                      rounded-lg dark:text-gray-300 dark:hover:text-orange-500
                      dark:hover:bg-gray-800 hover:bg-gray-100"
                  >
                    {label}
                  </Link>
                ))}
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="w-full py-2 px-4 flex items-center space-x-2 rounded-lg
                    transition-colors duration-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {sections.map(({ id, component: Component }, index) => {
        const { ref, inView } = sectionRefs[index];

        return (
          <motion.section
            key={id}
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen pt-20 px-4 md:px-6 lg:px-8"
          >
            <Component darkMode={darkMode} />
          </motion.section>
        );
      })}

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-orange-500 text-white shadow-lg
                  hover:bg-orange-600 transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
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
}

export default Portfolio;