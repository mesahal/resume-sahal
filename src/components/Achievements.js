import React, { useEffect } from "react";

const Achievements = () => {
  useEffect(() => {
    const animateCount = (elementId, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        document.getElementById(elementId).innerText = Math.floor(
          progress * (end - start) + start
        );
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount("count", 0, 3500, 2000);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const counterElement = document.querySelector(".counter");
    if (counterElement) {
      observer.observe(counterElement);
    }
  }, []);

  const achievements = [
    {
      platform: "Codeforces",
      logo: "resource/cf.png",
      count: "2700+",
      link: "https://codeforces.com/profile/sahal",
      rating: "Max Rating 1694",
    },
    {
      platform: "Leetcode",
      logo: "resource/leetcode.png",
      count: "200+",
      link: "https://leetcode.com/sahal2000/",
      rating: "Max Rating 1747",
    },
    {
      platform: "Atcoder",
      logo: "resource/atcoder.jpg",
      count: "200+",
      link: "https://atcoder.jp/users/sahal2000",
      rating: "Max Rating 678",
    },
    {
      platform: "Codechef",
      logo: "resource/codechef.PNG",
      count: "30+",
      link: "https://www.codechef.com/users/sahal2000",
      rating: "Max Rating 1759",
    },
    {
      platform: "UVA",
      logo: "resource/uva.png",
      count: "180+",
      link: "https://onlinejudge.org/index.php?option=com_frontpage&Itemid=1",
    },
    {
      platform: "Light OJ",
      logo: "resource/loj.png",
      count: "140+",
      link: "https://lightoj.com/user/me-sahal2000",
    },
    {
      platform: "CSES",
      logo: "resource/cses.png",
      count: "90+",
      link: "https://cses.fi/user/5906",
    },
    {
      platform: "Spoj",
      logo: "resource/spoj.PNG",
      count: "30+",
      link: "https://www.spoj.com/users/sahal2000/",
    },
  ];

  return (
    <section id="achievements" className="py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10">Achievements</h1>
        <div className="text-center text-5xl font-bold mb-10">
          Online Problem Solving{" "}
          <span id="count" className="text-green-500">
            0
          </span>
          +
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {achievements.map((ach, index) => (
            <div className="col">
              <div className="bg-[#ffece8] border-none rounded-xl py-8 px-4 w-full h-full transition-all duration-300 hover:bg-white hover:shadow-lg">
                <div className="flex justify-center items-center">
                  <div key={index} className="flex flex-col text-center h-48">
                    <div className="flex-grow ">
                      <img
                        src={ach.logo}
                        alt={ach.platform}
                        className="mx-auto w-2/6 pb-4"
                      />
                    </div>

                    <div className="">
                      <h3 className="text-xl font-bold text-black">
                        {ach.count}
                      </h3>
                      <p className="text-lg">
                        <a
                          href={ach.link}
                          className="text-black font-bold no-underline"
                        >
                          {ach.platform}
                        </a>
                      </p>
                      {ach.rating && (
                        <h3 className="text-lg font-bold text-black">
                          {ach.rating}
                        </h3>
                      )}
                    </div>
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

export default Achievements;
