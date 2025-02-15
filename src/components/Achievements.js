import { useEffect, useRef } from "react";
import { Trophy, ExternalLink } from "lucide-react";

const Achievements = ({ darkMode }) => {
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateCount = (start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(
            progress * (end - start) + start
          );
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            animateCount(0, 3500, 2000);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: "Codeforces",
      count: "2750+",
      rating: "Max Rating 1694",
      link: "https://codeforces.com/profile/sahal",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-codeforces-3628695-3029920.png",
    },
    {
      name: "LeetCode",
      count: "250+",
      rating: "Max Rating 1747",
      link: "https://leetcode.com/sahal2000/",
      logo: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
    },
    {
      name: "AtCoder",
      count: "200+",
      rating: "Max Rating 678",
      link: "https://atcoder.jp/users/sahal2000",
      logo: "https://img.atcoder.jp/assets/atcoder.png",
    },
    {
      name: "CodeChef",
      count: "50+",
      rating: "Max Rating 1759",
      link: "https://www.codechef.com/users/sahal2000",
      logo: "https://cdn.codechef.com/images/cc-logo.svg",
    },
    {
      name: "LightOJ",
      count: "100+",
      link: "https://lightoj.com/user/sahal",
      logo: "https://static.lightoj.com/assets/loj-logo-inverted.png",
    },
    {
      name: "UVa Online Judge",
      count: "150+",
      link: "https://uhunt.onlinejudge.org/id/955955",
      logo: "https://uhunt.onlinejudge.org/images/uva.png",
    },
  ];

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
              ref={counterRef}
              className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              0
            </span>
            +
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`group rounded-xl p-6 transition-all duration-300 border hover:transform hover:scale-[1.02] ${
                darkMode
                  ? "bg-gray-500/50 border-gray-700/50 hover:bg-gray-700/50"
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
                  {platform.count} Problems
                </p>
                {platform.rating && (
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } font-medium`}
                  >
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
      </div>
    </section>
  );
};

export default Achievements;
