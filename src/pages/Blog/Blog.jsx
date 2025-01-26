import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import all 63 images
import bh1 from "../../assets/blog/bh1.jpg";
import img1 from "../../assets/blog/image_1.jpg";
import img2 from "../../assets/blog/image_2.jpg";
import img3 from "../../assets/blog/image_3.jpg";
import img4 from "../../assets/blog/image_4.jpg";
import img5 from "../../assets/blog/image_5.jpg";
import img6 from "../../assets/blog/image_6.jpg";
import img7 from "../../assets/blog/image_7.jpg";
import img8 from "../../assets/blog/image_8.jpg";
import img9 from "../../assets/blog/image_9.jpg";
import img10 from "../../assets/blog/image_10.jpg";
import img11 from "../../assets/blog/image_11.jpg";
import img12 from "../../assets/blog/image_12.jpg";
import img13 from "../../assets/blog/image_13.jpg";
import img14 from "../../assets/blog/image_14.jpg";
import img15 from "../../assets/blog/image_15.jpg";
import img16 from "../../assets/blog/image_16.jpg";
import img17 from "../../assets/blog/image_17.jpg";
import img18 from "../../assets/blog/image_18.jpg";
import img19 from "../../assets/blog/image_19.jpg";
import img20 from "../../assets/blog/image_20.jpg";
import img21 from "../../assets/blog/image_21.jpg";
import img22 from "../../assets/blog/image_22.jpg";
import img23 from "../../assets/blog/image_23.jpg";
import img24 from "../../assets/blog/image_24.jpg";
import img25 from "../../assets/blog/image_25.jpg";
import img26 from "../../assets/blog/image_26.jpg";
import img27 from "../../assets/blog/image_27.jpg";
import img28 from "../../assets/blog/image_28.jpg";
import img29 from "../../assets/blog/image_29.jpg";
import img30 from "../../assets/blog/image_30.jpg";


const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of blogs per page

  // Array of blog posts with different images and unique descriptions
  const blogPosts = [
    { id: 1, title: "Blog Title 1", image: img1, description: "Unique description for Blog 1." },
    { id: 2, title: "Blog Title 2", image: img2, description: "Unique description for Blog 2." },
    { id: 3, title: "Blog Title 3", image: img3, description: "Unique description for Blog 3." },
    { id: 4, title: "Blog Title 4", image: img4, description: "Unique description for Blog 4." },
    { id: 5, title: "Blog Title 5", image: img5, description: "Unique description for Blog 5." },
    { id: 6, title: "Blog Title 6", image: img6, description: "Unique description for Blog 6." },
    { id: 7, title: "Blog Title 7", image: img7, description: "Unique description for Blog 7." },
    { id: 8, title: "Blog Title 8", image: img8, description: "Unique description for Blog 8." },
    { id: 9, title: "Blog Title 9", image: img9, description: "Unique description for Blog 9." },
    { id: 10, title: "Blog Title 10", image: img10, description: "Unique description for Blog 10." },
    { id: 11, title: "Blog Title 11", image: img11, description: "Unique description for Blog 11." },
    { id: 12, title: "Blog Title 12", image: img12, description: "Unique description for Blog 12." },
    { id: 13, title: "Blog Title 13", image: img13, description: "Unique description for Blog 13." },
    { id: 14, title: "Blog Title 14", image: img14, description: "Unique description for Blog 14." },
    { id: 15, title: "Blog Title 15", image: img15, description: "Unique description for Blog 15." },
    { id: 16, title: "Blog Title 16", image: img16, description: "Unique description for Blog 16." },
    { id: 17, title: "Blog Title 17", image: img17, description: "Unique description for Blog 17." },
    { id: 18, title: "Blog Title 18", image: img18, description: "Unique description for Blog 18." },
    { id: 19, title: "Blog Title 19", image: img19, description: "Unique description for Blog 19." },
    { id: 20, title: "Blog Title 20", image: img20, description: "Unique description for Blog 20." },
    // Continue adding descriptions and images up to Blog Title 63...
  ];

  // Pagination logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bh1})` }} // Set a static background for hero
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg">
              <a href="/" className="text-blue-300 hover:underline mr-2">
                Home
              </a>
              <span>/ Blog</span>
            </p>
          </div>
        </div>
      </section>


      {/* Video Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              poster="/images/video-thumbnail.jpg"
            >
              <source src="/videos/sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                data-aos="fade-up"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${post.image})`, // Dynamically set image
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover:text-orange-500">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center py-8">
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              className={`px-4 py-2 ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              } rounded`}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                >
                  {page}
                </button>
              </li>
            )
          )}
          <li>
            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              className={`px-4 py-2 ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              } rounded`}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Blog;
