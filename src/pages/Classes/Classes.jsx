import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ch1 from '../../assets/classes/ch1.jpg';
import c1 from '../../assets/classes/c1.jpg';
import c2 from '../../assets/classes/c2.jpg';
import c3 from '../../assets/classes/c3.jpg';
import c4 from '../../assets/classes/c4.jpg';
import c5 from '../../assets/classes/c5.jpg';
import c6 from '../../assets/classes/c6.jpg';
import g1 from '../../assets/classes/g1.jpg';
import g2 from '../../assets/classes/g2.jpg';
import g3 from '../../assets/classes/g3.jpg';
import g4 from '../../assets/classes/g4.jpg';

import { Link } from "react-router-dom";

const Classes = () => {
  const classesRef = useRef(null);
  const [classesVisible, setClassesVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = classesRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setClassesVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Yoga Classes Section */}
      <section
        ref={classesRef}
        className={`ftco-section transition-all duration-1000 ${
          classesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto text-center">
          <h3 className="text-orange-500 text-2xl uppercase tracking-wide mb-3 animate-fade-in">
            Yoga Classes
          </h3>
          <h2 className="text-4xl font-bold mb-8 animate-fade-in-delayed">
            Choose Your Level & Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[c1, c2, c3, c4, c5, c6].map((y, index) => (
              <div
                key={index}
                className={`group rounded-lg overflow-hidden shadow-lg transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-2xl ${
                  classesVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Image Section with Animation */}
                <div className="relative overflow-hidden">
                  <img
                    src={y}
                    alt={`Yoga Class ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-90"
                  />
                  {/* Gradient Overlay Animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-80"></div>
                  {/* Call-to-Action Text Animation */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                    <h3 className="text-white text-3xl font-bold transition-transform duration-500 ease-in-out group-hover:translate-y-0 animate-pulse">
                      Explore Now
                    </h3>
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    Yoga Program {index + 1}
                  </h3>
                  <p className="text-gray-500">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  </p>
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
            {[g1, g2, g3, g4].map((image, index) => (
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
