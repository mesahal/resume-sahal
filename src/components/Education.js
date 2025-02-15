import {
  GraduationCap,
  Calendar,
  Building2,
  BookOpen,
  School,
} from "lucide-react";

const Education = ({ darkMode }) => {
  const education = [
    {
      institution: "Jahangirnagar University",
      degree: "Bachelor of Science in Information Technology",
      duration: "February 2018 - March 2023",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
      icon: School,
    },
    {
      institution: "Notre Dame College",
      degree: "HSC ~ Science",
      duration: "2015 - 2017",
      image:
        "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?auto=format&fit=crop&q=80",
      icon: Building2,
    },
    {
      institution: "Faizur Rahman Ideal Institute",
      degree: "SSC ~ Science",
      duration: "2007 - 2014",
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-16">
          <GraduationCap className="w-10 h-10 text-purple-400" />
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Educational Journey
          </h1>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-xl p-6 transition-all duration-300 border ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                    : "bg-white/80 border-gray-200/50 hover:bg-gray-50/80"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="text-purple-400" size={24} />
                      <h3
                        className={`text-2xl font-semibold ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {edu.institution}
                      </h3>
                    </div>

                    <p
                      className={`text-xl pl-9 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {edu.degree}
                    </p>

                    <div
                      className={`flex items-center gap-2 pl-9 ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <Calendar size={16} />
                      <span className="text-sm">{edu.duration}</span>
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
