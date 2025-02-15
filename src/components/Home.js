import { useState, useEffect } from "react";
import {
  Mail,
  Github as GitHub,
  Linkedin,
  Twitter,
  Terminal,
  Code2,
  Binary,
  Cpu,
} from "lucide-react";
import { useTypingEffect } from "../components/hooks/useTypingEffect";

const Home = ({ darkMode }) => {
  const greeting = useTypingEffect("As-salamu alaykum", 100);
  const name = useTypingEffect("Sahal", 100);
  const [showRoles, setShowRoles] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    { text: "Software Engineer", color: "text-purple-400" },
    { text: "Problem Solver", color: "text-pink-400" },
    { text: "Competitive Programmer", color: "text-red-400" },
  ];

  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId;
    const typeText = () => {
      const targetText = roles[currentIndex].text;
      if (isTyping === true && currentText.length < targetText.length) {
        setCurrentText(targetText.slice(0, currentText.length + 1));
        timeoutId = setTimeout(typeText, 2000);
      } else {
        setIsTyping(false);
      }
    };

    const startErasing = () => {
      setCurrentText((prevText) => {
        if (prevText.length > 0) {
          setTimeout(startErasing, 50);
          return prevText.slice(0, -1);
        } else {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
          return "";
        }
      });
    };

    if (isTyping) {
      timeoutId = setTimeout(typeText, 100);
    } else {
      timeoutId = setTimeout(startErasing, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, currentIndex, roles, isTyping, setCurrentIndex]);

  useEffect(() => {
    if (name === "Sahal") {
      const timeout = setTimeout(() => {
        setShowRoles(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [name]);

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:me.sahal2000@gmail.com",
      label: "Email",
      color: "text-purple-400",
    },
    {
      icon: <GitHub size={20} />,
      href: "https://github.com/Sahal2000",
      label: "GitHub",
      color: "text-blue-400",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/me-sahal/",
      label: "LinkedIn",
      color: "text-cyan-400",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/me__sahal",
      label: "Twitter",
      color: "text-emerald-400",
    },
  ];

  const floatingIcons = [
    { icon: <Terminal size={24} />, delay: "100" },
    { icon: <Code2 size={24} />, delay: "1000" },
    { icon: <Binary size={24} />, delay: "2000" },
    { icon: <Cpu size={24} />, delay: "3000" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated Background Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${
            darkMode ? "text-white/20" : "text-gray-800/20"
          }`}
          style={{
            animation: `float 15s infinite linear`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Greeting */}
          <div className="lg:w-6/12 space-y-4">
            <div className="space-y-4">
              <h1
                className={`text-4xl md:text-6xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                  {greeting}
                </span>
                <br />
                <span className="inline-flex">
                  I am{" "}
                  <span className="text-purple-500 ml-2 relative">{name}</span>
                </span>
              </h1>
            </div>

            <div
              className={`flex gap-4 transform transition-all duration-1000 delay-500 ${
                showRoles
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    link.color
                  } 
                    transform hover:scale-110 hover:rotate-[8deg] ${
                      darkMode
                        ? "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50"
                        : "bg-white/80 border border-gray-200/50 hover:bg-gray-100/80"
                    }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Roles */}
          <div
            className={`lg:w-6/12 transform transition-all duration-1000 ${
              showRoles
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <div className="p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-6 text-5xl">
                {showRoles && (
                  <div className="relative h-16">
                    <span className={`${roles[currentIndex].color}`}>
                      {currentText}
                      <span className="absolute ml-1 w-1 h-full bg-current animate-blink"></span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
