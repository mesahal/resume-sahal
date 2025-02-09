import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
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
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Professional Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 rounded-lg object-cover mb-4"
              />

              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Building2 size={20} className="text-orange-500" />
                {exp.company}
              </h3>

              <p className="text-gray-400 mb-4">{exp.role}</p>

              <div className="flex items-center gap-2 text-sm text-gray-500">
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