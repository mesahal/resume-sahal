import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "BS23",
      logo: "resource/bs23.png",
      duration: "April 2024 - Present",
      role: "Associate Software Engineer"
    },
    {
      company: "Synesis",
      logo: "resource/synesis.png",
      duration: "August 2023 - March 2024",
      role: "Trainee Programmer"
    },
    {
      company: "BdOSN",
      logo: "resource/bdosn.jpeg",
      duration: "2020 - 2021",
      role: "Programming Instructor"
    }
  ];

  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10">Experience</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={exp.logo} alt={exp.company} className="w-1/2 mx-auto mb-4" />
              <h3 className="text-center text-xl font-semibold">{exp.duration}</h3>
              <p className="text-center text-lg">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;