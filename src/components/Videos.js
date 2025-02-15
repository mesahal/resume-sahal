import { Youtube, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Videos = ({ darkMode }) => {
  const videos = [
    {
      title:
        "ICPC World Finals 2024: Bangladesh Teams Shine on Global Programming Stage",
      description:
        "Coverage of DU, SUST, and KUET teams representing Bangladesh at the ICPC World Finals 2024",
      videoId: "zUlaDztnFwY",
      category: "Competitive Programming",
    },
    {
      title: "First Bangladeshi Gold Medalist | Debojoti Das Soumya | IOI 2024",
      description:
        "Celebrating the historic achievement of Bangladesh's first IOI Gold Medal",
      videoId: "OhB2toRifMg",
      category: "Achievement",
    },
    {
      title: "কে নির্বাচন করে আমেরিকার প্রেসিডেন্ট?",
      description:
        "An in-depth explanation of the US Presidential election process",
      videoId: "9gSDZkE9Iho",
      category: "Educational",
    },
    {
      title: "First-Ever Private Spacewalk (2024)",
      description:
        "Historic milestone in commercial space exploration with the first private spacewalk",
      videoId: "7lbgZPalIaE",
      category: "Space",
    },
    {
      title: "কীভাবে ইংরেজি ক্যালেন্ডার ছড়িয়ে পড়লো সারা বিশ্বে!",
      description:
        "The fascinating history of how the English calendar spread worldwide",
      videoId: "_JF1LZ_eHvc",
      category: "History",
    },
    {
      title: "পানির ইলিশ সোনার দরে । ইলিশের দাম বৃদ্ধি",
      description:
        "Analysis of the rising prices of Hilsa fish and its economic impact",
      videoId: "KJQk_8yJvtM",
      category: "Economics",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Video Content
        </h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="pb-12"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div
                className={`group rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-full border ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50"
                    : "bg-white/80 border-gray-200/50"
                }`}
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 mb-3 text-sm rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                    {video.category}
                  </span>

                  <div className="flex items-center gap-2 mb-3">
                    <Youtube className="text-purple-400" size={20} />
                    <h3
                      className={`text-xl font-semibold line-clamp-1 ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {video.title}
                    </h3>
                  </div>

                  <p
                    className={`mb-4 line-clamp-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {video.description}
                  </p>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                  >
                    Watch Video
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Videos;
