import React from 'react';

const Work = () => {
  const works = [
    {
      title: "Worked as a Programming Instructor",
      image: "resource/22.png",
      description: "at BdOSN Girls Programming Camp",
      link: "https://www.bdosn.org/blog/news-events/online-ghgpc-2021"
    },
    {
      title: "Worked at Front End Projects",
      image: "resource/gtbg.png",
      description: "using HTML, CSS and Javascript",
      link: "https://github.com/Sahal2000"
    },
    {
      title: "Solved 3000+ Algorithm and Data Structure Problems",
      image: "resource/stopstalk.PNG",
      description: "on different platforms using C and C++",
      link: "https://www.stopstalk.com/user/profile/sahal"
    }
  ];

  return (
    <section id="work" className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {works.map((work, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-72">
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h5 className="text-xl font-semibold">{work.title}</h5>
                <p className="text-gray-600">{work.description}</p>
                <a href={work.link} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;