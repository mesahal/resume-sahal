import {
  Terminal,
  Code2,
  Binary,
  Cpu,
  Braces,
  Database,
  Globe,
  Server,
} from "lucide-react";

const FloatingIcons = ({ darkMode }) => {
  const icons = [
    { Icon: Terminal, size: 24, delay: 0 },
    { Icon: Code2, size: 20, delay: 2 },
    { Icon: Binary, size: 16, delay: 4 },
    { Icon: Cpu, size: 24, delay: 6 },
    { Icon: Braces, size: 20, delay: 8 },
    { Icon: Database, size: 16, delay: 10 },
    { Icon: Globe, size: 24, delay: 12 },
    { Icon: Server, size: 20, delay: 14 },
  ];

  return (
    <>
      {icons.map(({ Icon, size, delay }, index) => (
        <div
          key={index}
          className={`absolute ${
            darkMode ? "text-white/10" : "text-gray-800/10"
          }`}
          style={{
            animation: `float 15s infinite linear`,
            animationDelay: `${delay}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
        >
          <Icon size={size} />
        </div>
      ))}
    </>
  );
};

export default FloatingIcons;
