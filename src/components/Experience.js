import {
  Building2,
  Calendar,
  Mail,
  Github as GitHub,
  Linkedin,
  Twitter,
  Terminal,
  Code2,
  Binary,
  Cpu,
} from "lucide-react";

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      company: "BS23",
      role: "Associate Software Engineer",
      duration: "April 2024 - Present",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
    },
    {
      company: "Synesis",
      role: "Trainee Programmer",
      duration: "August 2023 - March 2024",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      company: "BdOSN",
      role: "Programming Instructor",
      duration: "2020 - 2021",
      logo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    },
  ];

  const floatingIcons = [
    { icon: <Terminal size={24} />, delay: "100" },
    { icon: <Code2 size={24} />, delay: "1000" },
    { icon: <Binary size={24} />, delay: "2000" },
    { icon: <Cpu size={24} />, delay: "3000" },
  ];

  return (
    <section className="py-20 px-4">
      {/* Animated Background Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${
            darkMode ? "text-white" : "text-gray-800"
          } font-bold`}
          style={{
            animation: `float 15s infinite linear`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {item.icon}
        </div>
      ))}
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Professional Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative rounded-xl p-6 transition-all duration-300 border ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                  : "bg-white/80 border-gray-200/50 hover:bg-gray-50/80"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 rounded-lg object-cover mb-4"
              />

              <h3
                className={`text-xl font-semibold mb-2 flex items-center gap-2 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <Building2 size={20} className="text-purple-400" />
                {exp.company}
              </h3>

              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {exp.role}
              </p>

              <div
                className={`flex items-center gap-2 text-sm ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                <Calendar size={16} />
                {exp.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
