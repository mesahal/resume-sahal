import { useEffect, useRef } from 'react';
import { Trophy, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateCount = (start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(progress * (end - start) + start);
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
      link: "https://codeforces.com/profile/sahal"
    },
    {
      name: "LeetCode",
      count: "200+",
      rating: "Max Rating 1747",
      link: "https://leetcode.com/sahal2000/"
    },
    {
      name: "AtCoder",
      count: "200+",
      rating: "Max Rating 678",
      link: "https://atcoder.jp/users/sahal2000"
    },
    // ... other platforms
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Competitive Programming Achievements
        </h1>

        <div className="text-center mb-16">
          <div className="text-5xl font-bold">
            Problems Solved: {" "}
            <span ref={counterRef} className="text-emerald-500">0</span>+
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-orange-500" size={24} />
                <h3 className="text-xl font-semibold">{platform.name}</h3>
              </div>

              <div className="space-y-2">
                <p className="text-2xl font-bold text-emerald-400">{platform.count}</p>
                {platform.rating && (
                  <p className="text-gray-400">{platform.rating}</p>
                )}
              </div>

              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-orange-500 hover:text-orange-400 transition-colors"
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