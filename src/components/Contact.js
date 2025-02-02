import React from 'react';

const Contact = () => {
  const socials = [
    { name: "LinkedIn", icon: "resource/linkedin.png", link: "https://www.linkedin.com/in/me-sahal/" },
    { name: "Facebook", icon: "resource/facebook.jpg", link: "https://www.facebook.com/profile.php?id=100009204558204" },
    { name: "Twitter", icon: "resource/twitter.png", link: "https://twitter.com/me__sahal" },
    { name: "Instagram", icon: "resource/insta.png", link: "https://www.instagram.com/me__sahal/" },
    { name: "GitHub", icon: "resource/github.png", link: "https://github.com/Sahal2000" },
    { name: "Quora", icon: "resource/quora.png", link: "https://www.quora.com/profile/Md-Sahal-2" }
  ];

  return (
    <section id="contact" className="bg-gray-900 py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social, index) => (
            <div key={index} className="w-16 h-16">
              <a href={social.link}>
                <img src={social.icon} alt={social.name} className="w-full h-full rounded-full" />
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-white mt-5">Copyright © me-sahal</p>
      </div>
    </section>
  );
};

export default Contact;