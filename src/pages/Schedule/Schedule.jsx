import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg3 from "../../assets/Schedule/sh1.jpg"; // Ensure the correct path to your image
import { Link } from "react-router-dom";

const Schedule = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const schedules = [
    {
      time: "6:00am",
      programs: [
        { day: "Monday", title: "Morning Meditation", type: "Mindfulness", duration: "6:00am - 7:00am", trainer: "Nishan Perera" },
        { day: "Tuesday", title: "Sun Salutations", type: "Beginner Yoga", duration: "6:00am - 7:00am", trainer: "Sanduni Weerasinghe" },
        { day: "Wednesday", title: "Pranayama Breathing", type: "Relaxation", duration: "6:00am - 7:00am", trainer: "Kasun Jayasuriya" },
        { day: "Thursday", title: "Core Strengthening", type: "Intermediate", duration: "6:00am - 7:00am", trainer: "Dilshan Silva" },
        { day: "Friday", title: "Flexibility Training", type: "Stretching", duration: "6:00am - 7:00am", trainer: "Amaya Fernando" },
        { day: "Saturday", title: "Power Yoga", type: "Advanced", duration: "6:00am - 7:00am", trainer: "Chamika Ratnayake" },
        { day: "Sunday", title: "Yoga Nidra", type: "Deep Relaxation", duration: "6:00am - 7:00am", trainer: "Niluka Wickramasinghe" },
      ],
    },
    {
      time: "9:00am",
      programs: [
        { day: "Monday", title: "Morning Flow", type: "Advanced Sequence", duration: "9:00am - 10:30am", trainer: "Maricar Collins" },
        { day: "Tuesday", title: "Cardio Program", type: "Weight Loss", duration: "9:00am - 10:30am", trainer: "Maricar Collins" },
        { day: "Wednesday", title: "Body Building", type: "Weight Loss", duration: "9:00am - 10:30am", trainer: "Maricar Collins" },
        { day: "Thursday", title: "Bicep Pro", type: "Weight Loss", duration: "9:00am - 10:30am", trainer: "Maricar Collins" },
        { day: "Friday", title: "Leg Strengthening", type: "Weight Loss", duration: "9:00am - 10:30am", trainer: "Maricar Collins" },
        { day: "Saturday", title: "Muscle Relax", type: "Weight Loss", duration: "9:00am - 10:30am", trainer: "Maricar Collins" },
        { day: "Sunday", title: "Yoga Program", type: "Weight Loss", duration: "9:00am - 10:30am", trainer: "Maricar Collins" },
      ],
    },
    {
      time: "5:00pm",
      programs: [
        { day: "Monday", title: "Evening Flow", type: "Relaxation", duration: "5:00pm - 6:30pm", trainer: "Nimali Fernando" },
        { day: "Tuesday", title: "Strength Training", type: "Intermediate", duration: "5:00pm - 6:30pm", trainer: "Dilan Perera" },
        { day: "Wednesday", title: "Stretching", type: "Flexibility", duration: "5:00pm - 6:30pm", trainer: "Charitha Silva" },
        { day: "Thursday", title: "Yoga for Beginners", type: "Introductory", duration: "5:00pm - 6:30pm", trainer: "Ishara Perera" },
        { day: "Friday", title: "Pilates Fusion", type: "Strength & Flexibility", duration: "5:00pm - 6:30pm", trainer: "Tharindu Silva" },
        { day: "Saturday", title: "Advanced Yoga", type: "Expert Level", duration: "5:00pm - 6:30pm", trainer: "Ruwan Ekanayake" },
        { day: "Sunday", title: "Restorative Yoga", type: "Healing", duration: "5:00pm - 6:30pm", trainer: "Niluka Perera" },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-wrap h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">Yoga Schedule</h1>
            <p className="text-lg">
             <Link to="/" className="text-blue-300 hover:underline mr-2">
                             Home
                           </Link>
              <span> / Schedule</span>
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr className="text-center">
                  <th className="border border-gray-300 p-4">Time</th>
                  <th className="border border-gray-300 p-4">Monday</th>
                  <th className="border border-gray-300 p-4">Tuesday</th>
                  <th className="border border-gray-300 p-4">Wednesday</th>
                  <th className="border border-gray-300 p-4">Thursday</th>
                  <th className="border border-gray-300 p-4">Friday</th>
                  <th className="border border-gray-300 p-4">Saturday</th>
                  <th className="border border-gray-300 p-4">Sunday</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-4 bg-gray-100 font-bold text-gray-700">
                      {schedule.time}
                    </td>
                    {schedule.programs.map((program, idx) => (
                      <td
                        key={idx}
                        className={`border border-gray-300 p-4 ${
                          idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                      >
                        <h3 className="font-bold text-lg text-gray-800">
                          <a href="#" className="hover:underline">
                            {program.title}
                          </a>
                        </h3>
                        <span className="block text-sm text-gray-500">
                          {program.type}
                        </span>
                        <p className="text-sm text-gray-700 mt-2">
                          {program.duration}
                        </p>
                        <span className="block text-sm text-gray-500">
                          {program.trainer}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
