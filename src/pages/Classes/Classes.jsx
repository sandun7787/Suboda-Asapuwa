import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ch1 from '../../assets/classes/ch1.jpg'
import { Link } from "react-router-dom";

const Classes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
       {/* Hero Section */}
       <section
        className="hero-wrap h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${ch1})` }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">Yoga Classes</h1>
            <p className="text-lg">
            <Link to="/" className="text-blue-300 hover:underline mr-2">
                Home
              </Link>
              <span> / Classes</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <div className="mouse-icon w-8 h-12 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-gray-600">Yoga Classes</h3>
            <h2 className="text-4xl font-bold text-gray-800">
              Choose Your Level & Focus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Group Lessons", img: "images/program-1.jpg" },
              { title: "Yoga For Beginners", img: "images/program-2.jpg" },
              { title: "Yoga For Pregnant", img: "images/program-3.jpg" },
              { title: "Yoga For Couples", img: "images/program-4.jpg" },
              { title: "Bikram Yoga", img: "images/program-5.jpg" },
              { title: "Yoga Barre", img: "images/program-6.jpg" },
            ].map((program, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${program.img})` }}
                data-aos="zoom-in"
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-white text-sm">
                      A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-gray-600">Gallery</h3>
            <h2 className="text-4xl font-bold text-gray-800">
              See the latest photos
            </h2>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-aos="fade-up"
          >
            {[
              "images/gallery-1.jpg",
              "images/gallery-2.jpg",
              "images/gallery-3.jpg",
              "images/gallery-4.jpg",
            ].map((image, index) => (
              <a
                key={index}
                href={image}
                className="relative block group overflow-hidden"
              >
                <div
                  className="bg-cover bg-center w-full h-64 rounded-lg transition-transform transform group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-2xl">&#xf16d;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Classes;
