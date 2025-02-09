import { Code2, ExternalLink } from 'lucide-react';

const Work = () => {
  const works = [
    {
      title: "Programming Instructor",
      description: "Led the BdOSN Girls Programming Camp, teaching fundamental programming concepts and problem-solving techniques.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      link: "https://www.bdosn.org/blog/news-events/online-ghgpc-2021",
      tags: ["Teaching", "C++", "Algorithms"]
    },
    {
      title: "Frontend Development",
      description: "Built responsive web applications using modern JavaScript frameworks and libraries.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      link: "https://github.com/Sahal2000",
      tags: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Competitive Programming",
      description: "Solved 3000+ algorithmic problems across various competitive programming platforms.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      link: "https://www.stopstalk.com/user/profile/sahal",
      tags: ["Algorithms", "Data Structures", "Problem Solving"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Featured Work
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="text-orange-500" size={20} />
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Learn More
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;