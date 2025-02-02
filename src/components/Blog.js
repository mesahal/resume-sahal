import React from 'react';

const Blog = () => {
  const blogs = [
    {
      title: "Camera Specification – HDR",
      image: "resource/camhdr.jpeg",
      link: "https://d-list.net/camera-specification-hdr-or-high-dynamic-range-explained/"
    },
    {
      title: "Smartphone Proximity Sensor",
      image: "resource/smartphoneproximity.jpeg",
      link: "https://d-list.net/smartphone-specification-proximity-sensor/"
    },
    {
      title: "Smartphone Processors Explained",
      image: "resource/smartphoneprocessor.jpg",
      link: "https://d-list.net/smartphone-processors/"
    },
    {
      title: "5 Amazing Gadgets Invented in 2020",
      image: "resource/5amazing.jpg",
      link: "https://d-list.net/5-amazing-gadgets-invented-in-2020/"
    },
    {
      title: "PrintBrush XDR – Print in Any Surface",
      image: "resource/printxdr.png",
      link: "https://d-list.net/printbrush-xdr-print-in-any-surface-anything-from-your-mobile/"
    },
    {
      title: "Before Buying a Smartwatch",
      image: "resource/smartwatch.png",
      link: "https://d-list.net/things-you-should-take-care-before-buying-a-smartwatch/"
    },
    {
      title: "Competitive Programming",
      image: "resource/cp.jpg",
      link: "https://d-list.net/competitive-programming-what-and-why/"
    },
    {
      title: "Codeforces Problem Tutorial",
      image: "resource/cftutorial.jpg",
      link: "https://d-list.net/codeforces-round-529div-3-d-circular-dance-solution/"
    },
    {
      title: "Camera Specification : Megapixel Explained",
      image: "resource/camhdr.jpeg",
      link: "https://d-list.net/camera-specification-megapixel-explained/"
    }
  ];

  return (
    <section id="blog" className="py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-bold mb-10">Tech Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-center text-xl font-semibold mt-4">
                <a href={blog.link} className="text-blue-500 hover:text-blue-700">{blog.title}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;