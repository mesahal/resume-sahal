import React from 'react';

const Education = () => {
  const educations = [
    {
      institution: "Jahangirnagar University",
      logo: "resource/ju.png",
      degree: "Bachelor of Science in Information Technology",
      duration: "February 2018 - March 2023"
    },
    {
      institution: "Notre Dame College",
      logo: "resource/vdc.png",
      degree: "HSC ~ Science",
      duration: "2015 - 2017"
    },
    {
      institution: "Faizur Rahman Ideal Institute",
      logo: "resource/frii.png",
      degree: "SSC ~ Science",
      duration: "2007 - 2014"
    }
  ];

  return (
    <section id="education" className="py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10">Education</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {educations.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={edu.logo} alt={edu.institution} className="w-1/3 mx-auto mb-4" />
              <h2 className="text-center text-2xl font-semibold">{edu.institution}</h2>
              <h5 className="text-center text-lg">{edu.degree}</h5>
              <h6 className="text-center text-gray-600">{edu.duration}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;