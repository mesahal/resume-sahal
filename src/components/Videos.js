import { Youtube, ExternalLink } from "lucide-react";

const Videos = ({ darkMode }) => {
  const videos = [
    {
      title:
        "ICPC World Finals 2024: Bangladesh Teams Shine on Global Programming Stage",
      description:
        "Coverage of DU, SUST, and KUET teams representing Bangladesh at the ICPC World Finals 2024",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "https://www.youtube.com/watch?v=zUlaDztnFwY",
      category: "Competitive Programming",
    },
    {
      title: "First Bangladeshi Gold Medalist | Debojoti Das Soumya | IOI 2024",
      description:
        "Celebrating the historic achievement of Bangladesh's first IOI Gold Medal",
      thumbnail: "https://images.unsplash.com/photo-1567593810070-7a3d471af022",
      link: "https://www.youtube.com/watch?v=OhB2toRifMg",
      category: "Achievement",
    },
    {
      title: "কে নির্বাচন করে আমেরিকার প্রেসিডেন্ট?",
      description:
        "An in-depth explanation of the US Presidential election process",
      thumbnail: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c",
      link: "https://www.youtube.com/watch?v=9gSDZkE9Iho",
      category: "Educational",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Video Content
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50"
                  : "bg-white/80 border-gray-200/50"
              }`}
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full text-sm text-white">
                  {video.category}
                </span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Youtube className="text-purple-400" size={20} />
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {video.title}
                  </h3>
                </div>

                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {video.description}
                </p>

                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                >
                  Watch Video
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
