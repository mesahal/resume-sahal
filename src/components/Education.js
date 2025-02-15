import { GraduationCap, Calendar, Building2, BookOpen } from "lucide-react";

const Education = ({ darkMode }) => {
  const education = [
    {
      institution: "Jahangirnagar University",
      degree: "Bachelor of Science in Information Technology",
      duration: "February 2018 - March 2023",
      logo: "https://juniv.edu/storage/image/settings/1700628070-ju-logo.png",
      icon: GraduationCap,
      description: "CGPA: 3.45 out of 4.00",
    },
    {
      institution: "Notre Dame College",
      degree: "HSC ~ Science",
      duration: "2015 - 2017",
      logo: "https://notredame.edu.bd/public/images/logo.png",
      icon: Building2,
      description: "GPA: 5.00 out of 5.00",
    },
    {
      institution: "Faizur Rahman Ideal Institute",
      degree: "SSC ~ Science",
      duration: "2007 - 2014",
      logo: "https://frii.edu.bd/wp-content/uploads/2022/03/frii-logo.png",
      icon: BookOpen,
      description: "GPA: 5.00 out of 5.00",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-24">
          <GraduationCap className="w-10 h-10 text-purple-400" />
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Educational Journey
          </h1>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="relative">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex items-center mb-16 last:mb-0 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-4 border-white dark:border-gray-900">
                      <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-gradient-to-r from-purple-400 to-pink-500 opacity-75"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-[calc(50%-3rem)] ${
                      isLeft ? "mr-auto pr-8" : "ml-auto pl-8"
                    }`}
                  >
                    <div
                      className={`group rounded-xl p-6 transition-all duration-300 border shadow-lg hover:shadow-xl ${
                        darkMode
                          ? "bg-gray-800/90 border-gray-700/50 hover:bg-gray-700/90"
                          : "bg-white/90 border-gray-200/50 hover:bg-white"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Institution Logo */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-white p-2 border-4 border-purple-400/20 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={edu.logo}
                            alt={edu.institution}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="text-center space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <Icon className="text-purple-400" size={20} />
                          <h3
                            className={`text-xl font-semibold ${
                              darkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                          >
                            {edu.institution}
                          </h3>
                        </div>

                        <p
                          className={`text-lg font-medium ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {edu.degree}
                        </p>

                        <p
                          className={`text-sm font-semibold ${
                            darkMode ? "text-purple-400" : "text-purple-600"
                          }`}
                        >
                          {edu.description}
                        </p>

                        <div
                          className={`flex items-center justify-center gap-2 text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-purple-400 to-pink-500"
              >
                <div className="absolute left-0 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500">
                  <div className="absolute inset-0 w-full h-full rounded-full animate-ping bg-gradient-to-r from-purple-400 to-pink-500 opacity-75"></div>
                </div>

                <div
                  className={`group rounded-xl p-6 transition-all duration-300 border shadow-lg hover:shadow-xl ${
                    darkMode
                      ? "bg-gray-800/90 border-gray-700/50 hover:bg-gray-700/90"
                      : "bg-white/90 border-gray-200/50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-2 border-2 border-purple-400/20 flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon className="text-purple-400" size={18} />
                        <h3
                          className={`text-lg font-semibold ${
                            darkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {edu.institution}
                        </h3>
                      </div>

                      <p
                        className={`text-base ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {edu.degree}
                      </p>

                      <p
                        className={`text-sm font-medium ${
                          darkMode ? "text-purple-400" : "text-purple-600"
                        }`}
                      >
                        {edu.description}
                      </p>

                      <div
                        className={`flex items-center gap-2 text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
