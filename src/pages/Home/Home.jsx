import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import h1 from "../../assets/image/h1.jpg";
import in1 from "../../assets/image/in1.jpg";

const changingTexts = [
  "Inspiration For Joyful Living.",
  "Change Your World with Yoga.",
  "Find Your Inner Peace Today.",
];

const HomePage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [introVisible, setIntroVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    const interval = setInterval(() => {
      setIsVisible(false); // Fade-out animation
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
        setIsVisible(true); // Fade-in animation
      }, 1000);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Intro Section Scroll Animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntroVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger animation when 30% of the section is visible
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) observer.unobserve(introRef.current);
    };
  }, []);

  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-start text-left"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${h1})`,
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="flex items-center justify-start h-full">
            <div className="w-full md:w-2/3">
              <h1
                className={`text-5xl font-bold mb-4 text-white transform transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                }`}
              >
                {changingTexts[currentTextIndex]}
              </h1>
              <h2 className="text-lg mb-6 text-white opacity-90 hover:opacity-100">
                Do Yoga today for a better tomorrow
              </h2>
              <Link
                to="/signup"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl"
              >
                15 Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section
        ref={introRef}
        className={`flex flex-col lg:flex-row h-screen bg-gray-50 transition-all duration-1000 ${
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image Section */}
        <div
          className={`flex-1 flex justify-center items-center lg:justify-start p-8 transform transition-all duration-1000 ${
            introVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={in1}
            alt="Yoga Intro"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className={`flex-1 flex items-center px-12 transform transition-all duration-1000 delay-300 ${
            introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-left">
            <h2 className="text-5xl font-bold text-gray-900 leading-snug mb-6">
              Why You Should <br /> Go To Yoga
            </h2>
            <p className="text-lg leading-relaxed text-gray-500 mb-8">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <ul className="list-none space-y-6">
              {[
                "Yoga boosts brain power",
                "Yoga helps you to breathe better",
                "Yoga improves your strength",
                "Yoga helps you to focus",
                "Yoga helps give meaning to your day",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center text-lg text-gray-700 opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span className="mr-4 text-pink-500 text-2xl">✔</span>
                  <span className="text-gray-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
