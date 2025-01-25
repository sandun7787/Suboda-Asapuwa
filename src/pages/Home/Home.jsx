import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import h1 from "../../assets/image/h1.jpg";
import in1 from "../../assets/image/in1.jpg";
import y1 from "../../assets/image/y1.jpg";
import y2 from "../../assets/image/y2.jpg";
import y3 from "../../assets/image/y3.jpg";
import y4 from "../../assets/image/y4.jpg";
import y5 from "../../assets/image/y5.jpg";
import y6 from "../../assets/image/y6.jpg";
import c1 from "../../assets/image/c1.jpg"
import person1 from "../../assets/image/person_1.jpg";
import person2 from "../../assets/image/person_2.jpg";
import person3 from "../../assets/image/person_3.jpg";
import B1 from "../../assets/image/B1.jpg"
import B2 from "../../assets/image/B2.jpg";
import B3 from "../../assets/image/B3.jpg";
import g1 from "../../assets/image/g1.jpg";
import g2 from "../../assets/image/g2.jpg";
import g3 from "../../assets/image/g3.jpg";
import g4 from "../../assets/image/g4.jpg";





const changingTexts = [
  "Inspiration For Joyful Living.",
  "Change Your World with Yoga.",
  "Find Your Inner Peace Today.",
];

const HomePage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [introVisible, setIntroVisible] = useState(false);
  const [serviceVisible, setServiceVisible] = useState(false);
  const [classesVisible, setClassesVisible] = useState(false);
  const [pricingVisible, setPricingVisible] = useState(false);
  const [testimonyVisible, setTestimonyVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [counts, setCounts] = useState({
    happyCustomers: 0,
    yogaWorkshops: 0,
    yearsOfExperience: 0,
    lessonsConducted: 0,
  });


  const introRef = useRef(null);
  const serviceRef = useRef(null);
  const classesRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonyRef = useRef(null);
  const blogRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    // Hero Section Animation
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  

  

  useEffect(() => {
    // Scroll Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === introRef.current) {
            setIntroVisible(entry.isIntersecting);
          }
          if (entry.target === serviceRef.current) {
            setServiceVisible(entry.isIntersecting);
          }
          if (entry.target === classesRef.current) {
            setClassesVisible(entry.isIntersecting);
          }
          if (entry.target === pricingRef.current) {
            setPricingVisible(entry.isIntersecting);
          }

          if (entry.target === testimonyRef.current) {
            setTestimonyVisible(entry.isIntersecting);
          }
          if (entry.target === blogRef.current) {
            setBlogVisible(entry.isIntersecting);
          }

          if (entry.target === galleryRef.current) {
            setGalleryVisible(entry.isIntersecting);
          }
        
      
        });
      },
      { threshold: 0.3 }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (serviceRef.current) observer.observe(serviceRef.current);
    if (classesRef.current) observer.observe(classesRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);
    if (testimonyRef.current) observer.observe(testimonyRef.current);
    if (blogRef.current) observer.observe(blogRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    

    return () => {
      if (introRef.current) observer.unobserve(introRef.current);
      if (serviceRef.current) observer.unobserve(serviceRef.current);
      if (classesRef.current) observer.unobserve(classesRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
      if (testimonyRef.current) observer.unobserve(testimonyRef.current);
      if (blogRef.current) observer.unobserve(blogRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);

     
    };
  }, []);

   // Counter Section Logic
   useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("counter-section");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight) {
        const targetCounts = {
          happyCustomers: 5000,
          yogaWorkshops: 4560,
          yearsOfExperience: 570,
          lessonsConducted: 900,
        };

        const incrementCounters = () => {
          setCounts((prevCounts) => {
            let allCompleted = true;
            const updatedCounts = { ...prevCounts };

            Object.keys(targetCounts).forEach((key) => {
              if (updatedCounts[key] < targetCounts[key]) {
                updatedCounts[key] += Math.ceil(targetCounts[key] / 100);
                allCompleted = false;
              }
            });

            if (allCompleted) clearInterval(interval);
            return updatedCounts;
          });
        };

        const interval = setInterval(incrementCounters, 30);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

        <div className="flex-1 flex items-center px-12">
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
              {["Yoga boosts brain power", "Yoga helps you to breathe better", "Yoga improves your strength", "Yoga helps you to focus", "Yoga helps give meaning to your day"].map((item, index) => (
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

      {/* Services Section */}
      <section ref={serviceRef} className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {[
              {
                title: "Healthy Lifestyle",
                text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
                icon: "fas fa-heart",
              },
              {
                title: "Body & Mind Balance",
                text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
                icon: "fas fa-balance-scale",
              },
              {
                title: "Meditation Practice",
                text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
                icon: "fas fa-meditation",
              },
              {
                title: "Edeology",
                text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
                icon: "fas fa-lightbulb",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`w-full md:w-1/4 px-4 mb-8 transform transition-all duration-1000 ${
                  serviceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.3}s` }}
              >
                <div className="bg-white text-center rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-3xl">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.text}</p>
                </div>
              </div>
            ))}
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
      {[y1, y2, y3, y4, y5, y6].map((y, index) => (
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


      {/* Pricing Section */}
      <section ref={pricingRef} className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Pricing</h2>
          <p className="text-gray-600 text-lg mb-12">
            Choose a plan that works for you and your needs.
          </p>
          <div className="flex flex-wrap justify-center -mx-4">
            {[
              {
                title: "Basic Plan",
                price: "$19",
                features: [
                  "Access to all basic features",
                  "Community support",
                  "Email support",
                ],
                bgGradient: "from-orange-500 to-red-500",
              },
              {
                title: "Pro Plan",
                price: "$49",
                features: [
                  "Access to all pro features",
                  "Priority support",
                  "Advanced tools",
                ],
                bgGradient: "from-blue-500 to-green-500",
              },
              {
                title: "Premium Plan",
                price: "$99",
                features: [
                  "Unlimited access to all features",
                  "24/7 dedicated support",
                  "Exclusive tools and resources",
                ],
                bgGradient: "from-purple-500 to-pink-500",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`w-full md:w-1/3 px-4 mb-8 transform transition-all duration-1000 ${
                  pricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.3}s` }}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.title}</h3>
                  <div className="text-orange-500 text-4xl font-bold mb-6">
                    {plan.price}
                    <sup className="text-lg">/mo</sup>
                  </div>
                  <ul className="text-gray-600 text-sm space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`bg-gradient-to-r ${plan.bgGradient} text-white py-3 px-6 rounded-lg font-bold hover:shadow-xl transition-transform`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

{/* Successful Stories Section */}
<section
  ref={testimonyRef}
  className={`ftco-section testimony-section py-12 transition-all duration-1000 ${
    testimonyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="container mx-auto">
    {/* Heading */}
    <div className="row justify-center mb-8">
      <div className="col-md-7 text-center">
        <h3 className="text-pink-500 text-lg uppercase tracking-wide animate-fade-in">
          Testimony
        </h3>
        <h2 className="text-4xl font-bold mt-2 animate-fade-in-delayed">
          Successful Stories
        </h2>
      </div>
    </div>

    {/* Testimonials */}
    <div className="row">
      <div className="col-md-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              image: person1,
              name: "Gabby Smith",
              position: "Customer",
            },
            {
              text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              image: person2,
              name: "Floyd Weather",
              position: "Customer",
            },
            {
              text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              image: person3,
              name: "James Dee",
              position: "Customer",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className={`testimony-wrap p-6 bg-white shadow-lg rounded-lg transform transition duration-700 hover:scale-105 hover:shadow-2xl ${
                testimonyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text">
                <div className="relative pl-6 mb-4">
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                  <span className="absolute left-0 top-0 text-pink-500 text-3xl">
                    <i className="fas fa-quote-left"></i>
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-pink-500"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <span className="text-sm text-gray-500">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>;

<section
  id="counter-section"
  className="relative bg-cover bg-fixed bg-center py-16"
  style={{ backgroundImage: `url(${c1})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
  {/* Container */}
  <div className="relative z-10 container mx-auto">
    <div className="flex flex-wrap justify-between text-center">
      {/* Happy Customers */}
      <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
        <h1 className="text-5xl font-bold text-white mb-2">
          {counts.happyCustomers.toLocaleString()}
        </h1>
        <p className="text-lg text-white">Happy Customers</p>
      </div>

      {/* Yoga Workshops */}
      <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
        <h1 className="text-5xl font-bold text-white mb-2">
          {counts.yogaWorkshops.toLocaleString()}
        </h1>
        <p className="text-lg text-white">Yoga Workshops</p>
      </div>

      {/* Years of Experience */}
      <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
        <h1 className="text-5xl font-bold text-white mb-2">
          {counts.yearsOfExperience.toLocaleString()}
        </h1>
        <p className="text-lg text-white">Years of Experience</p>
      </div>

      {/* Lessons Conducted */}
      <div className="w-full md:w-1/4 px-4">
        <h1 className="text-5xl font-bold text-white mb-2">
          {counts.lessonsConducted.toLocaleString()}
        </h1>
        <p className="text-lg text-white">Lessons Conducted</p>
      </div>
    </div>
  </div>
</section>

{/* Blog Section */}
<section
  ref={blogRef}
  className={`bg-gray-100 py-16 transition-all duration-1000 ${
    blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="container mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <h3
        className={`text-pink-500 uppercase text-lg tracking-wide transition-all duration-1000 ${
          blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Blog
      </h3>
      <h2
        className={`text-4xl font-bold transition-all duration-1000 ${
          blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Recent Posts
      </h2>
    </div>

    {/* Blog Posts */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[B1, B2, B3].map((image, index) => (
        <div
          key={index}
          className={`group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-1000 ${
            blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Zoom-in Effect on Hover */}
          <div className="relative overflow-hidden">
            <a
              href="#"
              className="block h-64 bg-cover bg-center transition-transform duration-500 transform group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            ></a>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div>
                <span className="block text-4xl font-bold text-pink-500">
                  {["31", "27", "25"][index]}
                </span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-gray-500">2018</span>
                <span className="block text-sm font-semibold text-gray-500">December</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              <a href="#">Young Women Doing Yoga</a>
            </h3>
            <p className="text-gray-600">
              A small river named Duden flows by their place and supplies it with the
              necessary regelialia.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section
      ref={galleryRef}
      className={`py-16 bg-gray-100 text-center transition-all duration-1000 ${
        galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div
          className={`flex flex-col items-center mb-12 transition-opacity duration-1000 ${
            galleryVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Gallery
          </h3>
          <h2 className="text-4xl font-bold text-center">See the latest photos</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[g1, g2, g3, g4].map((image, index) => (
            <div
              key={index}
              className={`relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md transform transition-transform duration-700 ${
                galleryVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Overlay */}
              <a
                href={image}
                className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100"
              >
                <span className="text-white text-3xl">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
       




    </div>
  );
};

export default HomePage;
