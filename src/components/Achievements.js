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
      count: "2700+",
      rating: "Max Rating 1694",
      link: "https://codeforces.com/profile/sahal",
    },
    {
      name: "LeetCode",
      count: "200+",
      rating: "Max Rating 1747",
      link: "https://leetcode.com/sahal2000/",
    },
    {
      name: "AtCoder",
      count: "200+",
      rating: "Max Rating 678",
      link: "https://atcoder.jp/users/sahal2000",
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
              className={`group rounded-xl p-6 transition-all duration-300 border ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50"
                  : "bg-white/80 border-gray-200/50 hover:bg-gray-50/80"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-purple-400" size={24} />
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
                  {platform.count}
                </p>
                {platform.rating && (
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
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
