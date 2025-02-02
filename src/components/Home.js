import React from "react";

const Home = () => {
  return (
    <section id="home" className="p-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold">As-salamu alaykum</h1>
            <h1 className="text-4xl font-bold">
              I am <span className="text-orange-500">Sahal</span>
            </h1>
            <p className="text-green-500 text-2xl mt-5">
              Software Engineer | Problem Solver | Competitive Programmer
            </p>
            <a
              href="mailto:me.sahal2000@gmail.com"
              className="flex items-center mt-7 text-white"
            >
              <img
                src="resource/gmail.jpg"
                alt="Gmail"
                className="w-8 h-8 mr-2"
              />
              me.sahal2000@gmail.com
            </a>
          </div>
          <div className="lg:w-1/2">
            <img src="resource/24.jpeg" alt="Sahal" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
