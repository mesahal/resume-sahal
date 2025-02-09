import { Mail, Github as GitHub, Linkedin, Twitter } from "lucide-react";
import LaptopBackground from "./another/LaptopBackground";

const Home = () => {
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:me.sahal2000@gmail.com",
      label: "Email",
    },
    {
      icon: <GitHub size={20} />,
      href: "https://github.com/Sahal2000",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/me-sahal/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://twitter.com/me__sahal",
      label: "Twitter",
    },
  ];

  return (
    <section className="min-h-screen should-float flex items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              As-salamu alaykum
              <br />I am <span className="text-orange-500">Sahal</span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-400">
              Software Engineer | Problem Solver | Competitive Programmer
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg blur opacity-75"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                alt="Coding"
                className="relative rounded-lg object-cover w-full aspect-video"
              />
              {/* <div className="bg-white ml-48">
                <LaptopBackground />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
