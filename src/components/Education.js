import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Jahangirnagar University",
      degree: "Bachelor of Science in Information Technology",
      duration: "February 2018 - March 2023",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
    },
    {
      institution: "Notre Dame College",
      degree: "HSC ~ Science",
      duration: "2015 - 2017",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
    },
    {
      institution: "Faizur Rahman Ideal Institute",
      degree: "SSC ~ Science",
      duration: "2007 - 2014",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Educational Journey
        </h1>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-48 rounded-lg object-cover"
                  />
                </div>

                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <GraduationCap className="text-orange-500" size={24} />
                    {edu.institution}
                  </h3>

                  <p className="text-xl text-gray-300">{edu.degree}</p>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    {edu.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;