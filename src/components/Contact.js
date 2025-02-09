import { Github, Linkedin, Twitter, Instagram, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      link: "https://github.com/Sahal2000",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/me-sahal/",
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      link: "https://twitter.com/me__sahal",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      link: "https://www.instagram.com/me__sahal/",
      color: "hover:text-pink-400"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      link: "mailto:me.sahal2000@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-400">Let's connect and create something amazing together</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-orange-500" size={24} />
            <h2 className="text-2xl font-semibold">Send a Message</h2>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors"
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
              className={`p-3 rounded-full bg-gray-800 ${social.color} transition-colors duration-300`}
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