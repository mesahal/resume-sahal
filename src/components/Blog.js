import { BookOpen, ExternalLink } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      title: "Camera Specification – HDR",
      excerpt: "Understanding High Dynamic Range in modern camera systems",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      link: "https://d-list.net/camera-specification-hdr-or-high-dynamic-range-explained/",
      category: "Photography"
    },
    {
      title: "Smartphone Proximity Sensor",
      excerpt: "Deep dive into how proximity sensors work in modern smartphones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      link: "https://d-list.net/smartphone-specification-proximity-sensor/",
      category: "Technology"
    },
    {
      title: "Competitive Programming Guide",
      excerpt: "A comprehensive guide to getting started with competitive programming",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      link: "https://d-list.net/competitive-programming-what-and-why/",
      category: "Programming"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Technical Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-orange-500 rounded-full text-sm">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="text-orange-500" size={20} />
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                </div>

                <p className="text-gray-400 mb-4">
                  {blog.excerpt}
                </p>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Read More
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;