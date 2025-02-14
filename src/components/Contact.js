import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      link: "https://github.com/Sahal2000",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/me-sahal/",
      color: "hover:text-purple-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      link: "https://twitter.com/me__sahal",
      color: "hover:text-pink-400",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      link: "https://www.instagram.com/me__sahal/",
      color: "hover:text-red-400",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      link: "mailto:me.sahal2000@gmail.com",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400">
            Let's connect and create something amazing together
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-12 border border-gray-700/50">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-purple-400" size={24} />
            <h2 className="text-2xl font-semibold text-gray-200">
              Send a Message
            </h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-colors text-gray-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-colors text-gray-200"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition-colors text-gray-200"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${social.color} transition-all duration-300 transform hover:scale-110`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
