import {
  Building2,
  Calendar,
  Terminal,
  Code2,
  Binary,
  Cpu,
} from "lucide-react";

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      company: "Brain Station 23 PLC.",
      role: "Software Engineer",
      duration: "April 2024 - Present",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQEhBWM1jX08fw/company-logo_200_200/company-logo_200_200/0/1630578624123/brain_station_23_logo?e=2147483647&v=beta&t=Mnfby5HpZM7vOn2xGUaXPOAay0N6yiYLxjMww8s1Ktg",
      description:
        "Working on enterprise-level software solutions using cutting-edge technologies.",
      skills: ["Spring Boot", "Java", "Microservice", "Fintech"],
    },
    {
      company: "Synesis IT Ltd.",
      role: "Trainee Programmer",
      duration: "August 2023 - March 2024",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGR9K7OrOwDBw/company-logo_200_200/company-logo_200_200/0/1636786495526/synesis_it_limited_logo?e=2147483647&v=beta&t=3-_mgdI3docP3CTwdGaHTEXYBk_fOvGe1fPcDh6LFpk",
      description:
        "Developed and maintained web applications, focusing on front-end development and API integration.",
      skills: ["Spring Boot", "Java", "JavaScript", "React"],
    },
    {
      company: "BdOSN",
      role: "Programming Instructor",
      duration: "2020 - 2021",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLIFa-dUEVHw/company-logo_200_200/company-logo_200_200/0/1630574736202/bdosn_logo?e=2147483647&v=beta&t=Ttgm4ylCNHa_ZcgD2aonCIqBN-KiT0FG9FlFnHxFDbw",
      description:
        "Developed and maintained web applications, focusing on front-end development and API integration.",
      skills: ["Algorithm", "Data Structure", "C", "C++"],
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
            darkMode ? "text-white/10" : "text-gray-800/10"
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

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Professional Journey
        </h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500">
                  <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-gradient-to-r from-purple-400 to-pink-500 opacity-75"></div>
                </div>

                {/* Card */}
                <div
                  className={`w-5/6 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <div
                    className={`group relative rounded-xl p-6 transition-all duration-300 border hover:transform hover:scale-[1.02] ${
                      darkMode
                        ? "bg-gray-900/50 border-gray-700/50 hover:bg-gray-700/50"
                        : "bg-white/80 border-gray-200/50 hover:bg-gray-50/80"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Company Logo */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-white p-2">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-xl font-semibold ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className={`text-lg ${
                            darkMode ? "text-purple-400" : "text-purple-600"
                          }`}
                        >
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`mb-4 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-sm rounded-full border ${
                            darkMode
                              ? "bg-gray-700/50 border-gray-600 text-gray-300"
                              : "bg-gray-100/80 border-gray-200 text-gray-700"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`flex items-center gap-2 text-sm ${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
