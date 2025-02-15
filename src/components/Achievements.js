import { useEffect, useRef } from "react";
import { Trophy, ExternalLink, Medal, MapPin } from "lucide-react";
import codeforces from "../assets/codeforces.webp";
import leetcode from "../assets/leetcode.png";
import atcoder from "../assets/atcoder.png";
import codechef from "../assets/codechef.jpeg";
import lightoj from "../assets/lightoj.jpeg";
import uva from "../assets/uva.png";
import aust from "../assets/austiupc.jpeg";
import ruet from "../assets/ruetiupc.jpeg";
import mbstu from "../assets/mbstuiupc.jpeg";
import cf from "../assets/cf.jpg";
import cc from "../assets/cc.jpg";

const Achievements = ({ darkMode }) => {
  const countersRef = useRef(new Map());
  const hasAnimated = useRef(new Set());

  const animateCount = (element, start, end, duration) => {
    if (!element) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (element) {
        element.textContent = Math.floor(progress * (end - start) + start);
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-platform-id");
          if (entry.isIntersecting && !hasAnimated.current.has(id)) {
            const element = countersRef.current.get(id);
            const count = parseInt(element.getAttribute("data-count"));
            animateCount(element, 0, count, 2000);
            hasAnimated.current.add(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((_, id) => {
      const element = document.querySelector(`[data-platform-id="${id}"]`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: "Codeforces",
      count: 2750,
      rating: "Max Rating 1694",
      ratingClass: "text-cyan-400",
      link: "https://codeforces.com/profile/sahal",
      logo: codeforces,
    },
    {
      name: "LeetCode",
      count: 250,
      rating: "Max Rating 1747",
      ratingClass: "text-yellow-400",
      link: "https://leetcode.com/sahal2000/",
      logo: leetcode,
    },
    {
      name: "AtCoder",
      count: 200,
      rating: "Max Rating 678",
      ratingClass: "text-green-400",
      link: "https://atcoder.jp/users/sahal2000",
      logo: atcoder,
    },
    {
      name: "CodeChef",
      count: 50,
      rating: "Max Rating 1759",
      ratingClass: "text-orange-400",
      link: "https://www.codechef.com/users/sahal2000",
      logo: codechef,
    },
    {
      name: "LightOJ",
      count: 100,
      link: "https://lightoj.com/user/sahal",
      logo: lightoj,
    },
    {
      name: "UVa Online Judge",
      count: 150,
      link: "https://uhunt.onlinejudge.org/id/955955",
      logo: uva,
    },
  ];

  const onlineContests = [
    {
      contest: "Codechef Starter 67 Div.2",
      position: "217",
      image: cc,
    },
    {
      contest: "Codeforces Round 760 Div. 3",
      position: "254",
      image: cf,
    },
  ];

  const onsiteContests = [
    {
      contest: "MBSTU IDPC 2020A",
      university: "MBSTU",
      position: "11",
      image: mbstu,
    },
    {
      contest: "RUET IUPC 2022",
      university: "RUET",
      position: "35",
      image: ruet,
    },
    {
      contest: "AUST IUPC 2022",
      university: "AUST",
      position: "42",
      image: aust,
    },
  ];

  const totalProblems = platforms.reduce(
    (acc, platform) => acc + platform.count,
    0
  );

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Competitive Programming Achievements
        </h1>

        <div className="text-center mb-16">
          <div
            className={`text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Problems Solved:{" "}
            <span
              ref={(el) => countersRef.current.set("total", el)}
              data-platform-id="total"
              data-count={totalProblems}
              className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              0
            </span>
            +
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              data-platform-id={`platform-${index}`}
              className={`group rounded-xl p-6 transition-all duration-300 border hover:transform hover:scale-[1.02] ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                  : "bg-white/80 border-gray-200/50 hover:bg-gray-50/80"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {platform.name}
                </h3>
              </div>

              <div className="space-y-2">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  <span
                    ref={(el) =>
                      countersRef.current.set(`platform-${index}`, el)
                    }
                    data-platform-id={`platform-${index}`}
                    data-count={platform.count}
                  >
                    0
                  </span>
                  + Problems
                </p>
                {platform.rating && (
                  <p className={`${platform.ratingClass} font-bold text-lg`}>
                    {platform.rating}
                  </p>
                )}
              </div>

              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-pink-400 transition-colors"
              >
                View Profile
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Contest Achievements */}
        <div className="space-y-16">
          {/* Online Contests */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Online Contest Achievements
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {onlineContests.map((contest, index) => (
                <div
                  key={index}
                  className={`group rounded-xl overflow-hidden transition-all duration-300 border hover:transform hover:scale-[1.02] ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                      : "bg-white/80 border-gray-200/50 hover:bg-gray-50/80"
                  }`}
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                    <img
                      src={contest.image}
                      alt={contest.contest}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {contest.contest}
                      </h3>
                      <p className="text-orange-400 font-semibold flex items-center gap-2">
                        <Medal size={16} />
                        Ranked {contest.position}th
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Onsite Contests */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-pink-400" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Onsite Contest Achievements
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {onsiteContests.map((contest, index) => (
                <div
                  key={index}
                  className={`group rounded-xl overflow-hidden transition-all duration-300 border hover:transform hover:scale-[1.02] ${
                    darkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                      : "bg-white/80 border-gray-200/50 hover:bg-gray-50/80"
                  }`}
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                    <img
                      src={contest.image}
                      alt={contest.contest}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-xl font-bold text-orange-400 mb-1">
                        {contest.contest}
                      </h3>
                      <p className="text-gray-300 mb-2">{contest.university}</p>
                      <p className="text-yellow-400 font-semibold flex items-center gap-2">
                        <Medal size={16} />
                        Ranked {contest.position}th
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
