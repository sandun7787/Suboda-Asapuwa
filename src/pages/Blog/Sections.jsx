import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import all images (ensure you have all up to 63)
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

const Sections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of blogs per page

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
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bh1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">Our Section</h1>
            <p className="text-lg">
              <a href="/" className="text-blue-300 hover:underline mr-2">
                Home
              </a>
              <span>/ Sections</span>
            </p>
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
                  style={{ backgroundImage: `url(${post.image})` }}
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
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className={`px-4 py-2 ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"} rounded`}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              className={`px-4 py-2 ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"} rounded`}
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

export default Sections;

