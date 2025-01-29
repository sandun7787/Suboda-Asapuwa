import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/image/B1.jpg";
import objectiveImg from "../../assets/image/B2.jpg";
import centerImg from "../../assets/image/B3.jpg";
import historyImg from "../../assets/image/g1.jpg";
import coach1 from "../../assets/image/g2.jpg";
import coach2 from "../../assets/image/g3.jpg";
import coach3 from "../../assets/image/g4.jpg";
import coach4 from "../../assets/image/h2.jpg";
import bg3 from "../../assets/image/in1.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-wrap h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">About Sri Subodha Meditation Center</h1>
            <p className="text-lg">
              <Link to="/" className="text-blue-300 hover:underline mr-2">
                Home
              </Link>
              <span> / About</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Objective Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Objective</h2>
            <p className="text-gray-700 leading-relaxed">
            At Sri Subodha Meditation Center, we are endeavoring to create a conducive atmosphere that provides the right set of circumstances for individuals who are into meditation practice and mindfulness and the core of Buddhism through residential retreats. While you are learning a bit about Buddhism, irrespective of the ideology and beliefs you hold onto, participants are taught the techniques to train your attention to achieve the state of calm, strengthening your ability to focus and manage your thoughts so that it can transform the way you navigate your lives. 
            </p>
          </div>
          <div
            className="h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${objectiveImg})` }}
            data-aos="fade-left"
          ></div>
        </div>
      </section>

      {/* About the Center Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${centerImg})` }}
            data-aos="fade-right"
          ></div>
          <div className="p-6" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">About the Center</h2>
            <p className="text-gray-700 leading-relaxed">
            Ambuluwawa Sri Subhodha Meditation Center, an affiliate of the Sri Subodharamaya International Buddhist Center, Peradeniya, is located in a beautiful, peaceful, and quiet environment. It is fully equipped with all facilities and is designed for solitary meditation spiritual development.
The present extent of the land belonging to the Centre is about six and a half acres, and some striking characteristics of the land are the loftiness of the dominant trees, rocky outcrops, and small streams. This unspoiled environment, created by the blessings of nature is an ideal place for practicing meditation. Currently, meditation retreats take place every month, and those who attend are mostly foreigners who seek solitude and real happiness through meditation. The center has been fully developed, well-furnished, and is able to accommodate about 30 people at one time.

            </p>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our History</h2>
            <p className="text-gray-700 leading-relaxed">
            The Sri Subodha Retreat Centre was established as the main retreat center of Sri Subodharama International Buddhist Centre, Peradeniya, Sri Lanka. The construction of the buildings in the center began in 2007, with the building of a Dhamma hall and two kutis. The development of the center has been made possible by the commitment and support provided by the Most Venerable Wattegama Dhammawasa Nayaka Maha Thero and by many devotees.
Venerable Dhammawasa Nayaka Maha Thero, who is the Chief Incumbent and the President of the Centre, is also the Chief Incumbent of the Sri Subodharama International Buddhist Centre, Peradeniya, the Chief Sanganayaka for Sri Lanka, and the Sanganayaka for Australia, Providing guidance and meditation instructions to all who sought it, it was he who pioneered the meditation center.
The Chief Nun, Ven. Nadimale Sudhamma, played a major role in building this center. For many years, she conducted retreats and openly provided spiritual support and meditation guidance. Her tireless work and her effort in many ways to keep the center running smoothly, will be remembered forever.

            </p>
          </div>
          <div
            className="h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${historyImg})` }}
            data-aos="fade-left"
          ></div>
        </div>
      </section>

      {/* Meet Our Coaches Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-pink-500 uppercase text-lg tracking-wide">Coaches</h3>
            <h2 className="text-3xl font-bold">Meet Our Yoga Coaches</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Mark Brook", img: coach1 },
              { name: "Sarah Henderson", img: coach2 },
              { name: "George Hump", img: coach3 },
              { name: "Victor Hump", img: coach4 },
            ].map((coach, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <img src={coach.img} className="rounded-lg mx-auto shadow-lg" alt={coach.name} />
                <h3 className="text-lg font-bold text-gray-800 mt-4">{coach.name}</h3>
                <p className="text-pink-500">Owner / Head Coach</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "Happy Customers", value: "5000" },
            { label: "Yoga Workshops", value: "4560" },
            { label: "Years of Experience", value: "570" },
            { label: "Lessons Conducted", value: "900" },
          ].map((counter, index) => (
            <div key={index} className="text-center" data-aos="fade-up">
              <h3 className="text-5xl font-bold">{counter.value}</h3>
              <p className="text-lg">{counter.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
