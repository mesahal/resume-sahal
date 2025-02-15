import { useState, useEffect } from "react";
import {
  Code2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  Server,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cityremit from "../assets/cityremit.png";
import convay from "../assets/convay.webp";
import healthcare from "../assets/healthcare.png";

const Work = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const professionalProjects = [
    {
      title: "City Remit",
      description:
        "A financial application for transferring remittances from Malaysia, utilizing Java, Spring Boot, Oracle, and Vue. My technical responsibilities include developing RESTful APIs, implementing new features, and fixing backend bugs.",
      image: cityremit,
      technologies: ["Java", "Spring Boot", "Oracle", "Vue.js", "RESTful APIs"],
      features: [
        "Secure remittance transfers",
        "Real-time transaction tracking",
        "Multi-currency support",
        "Automated compliance checks",
      ],
      role: "Backend Developer",
      icons: [
        { Icon: Server, color: "text-blue-400" },
        { Icon: Database, color: "text-red-400" },
        { Icon: Globe, color: "text-green-400" },
      ],
    },
    {
      title: "Convay",
      description:
        "A video conferencing platform providing meeting solutions for both individual and enterprise users. Built with Java, Spring Boot, React, and MySQL. My role involved developing RESTful APIs, implementing new features, and fixing frontend bugs.",
      image: convay,
      technologies: ["Java", "Spring Boot", "React", "MySQL", "WebRTC"],
      features: [
        "Real-time video conferencing",
        "Screen sharing",
        "Chat functionality",
        "Meeting recording",
      ],
      role: "Full Stack Developer",
      icons: [
        { Icon: Globe, color: "text-purple-400" },
        { Icon: Server, color: "text-yellow-400" },
        { Icon: Database, color: "text-cyan-400" },
      ],
    },
    {
      title: "Health Care",
      description:
        "A doctor appointment platform enabling patients to book appointments and provide ratings, with BMDC validation for doctor registration. Built using Java, Spring Boot, React, and PostgreSQL.",
      image: healthcare,
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "RESTful APIs",
      ],
      features: [
        "Doctor appointment booking",
        "BMDC validation",
        "Rating system",
        "Patient records management",
      ],
      role: "Full Stack Developer",
      icons: [
        { Icon: Database, color: "text-emerald-400" },
        { Icon: Server, color: "text-pink-400" },
        { Icon: Globe, color: "text-orange-400" },
      ],
    },
  ];

  const otherProjects = [
    {
      title: "Programming Instructor",
      description:
        "Led the BdOSN Girls Programming Camp, teaching fundamental programming concepts and problem-solving techniques.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      link: "https://www.bdosn.org/blog/news-events/online-ghgpc-2021",
      tags: ["Teaching", "C++", "Algorithms"],
    },
    {
      title: "Frontend Development",
      description:
        "Built responsive web applications using modern JavaScript frameworks and libraries.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      link: "https://github.com/mesahal",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Competitive Programming",
      description:
        "Solved 3000+ algorithmic problems across various competitive programming platforms.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      link: "https://www.stopstalk.com/user/profile/sahal",
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Professional Projects
        </h1>

        {/* Professional Projects Carousel */}
        <div className="mb-20">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full max-w-5xl mx-auto"
          >
            {professionalProjects.map((project, index) => (
              <SwiperSlide key={index} className="w-full max-w-3xl">
                <div
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800/50 border border-gray-700/50"
                      : "bg-white/80 border border-gray-200/50"
                  }`}
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      {project.icons.map(({ Icon, color }, i) => (
                        <Icon key={i} className={`w-6 h-6 ${color}`} />
                      ))}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Code2 className="text-purple-400" size={24} />
                      <h3
                        className={`text-2xl font-bold ${
                          darkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div className="mb-6">
                      <p
                        className={`text-lg mb-4 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-sm rounded-full border ${
                              darkMode
                                ? "bg-gray-700/50 border-gray-600 text-gray-300"
                                : "bg-gray-100/80 border-gray-200 text-gray-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`space-y-2 ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <h4 className="font-semibold text-purple-400">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <p
                        className={`flex items-center gap-2 font-bold ${
                          darkMode ? "text-orange-400" : "text-gray-700"
                        }`}
                      >
                        <span className="font-semibold text-purple-400">
                          Role:
                        </span>
                        {project.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-white hover:bg-gray-100 text-gray-600"
              } swiper-button-prev`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                  : "bg-white hover:bg-gray-100 text-gray-600"
              } swiper-button-next`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Other Projects */}
        {/* <div>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Other Notable Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50"
                    : "bg-white/80 border-gray-200/50"
                }`}
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="text-purple-400" size={20} />
                    <h3
                      className={`text-xl font-semibold ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-full border ${
                          darkMode
                            ? "bg-gradient-to-r from-purple-400/20 to-pink-500/20 text-gray-300 border-purple-500/20"
                            : "bg-gradient-to-r from-purple-400/10 to-pink-500/10 text-gray-600 border-purple-500/10"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                  >
                    Learn More
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Work;
