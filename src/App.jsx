import React from "react";
import Navbar from "./component/Navbar/navBar";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./component/Footer/Footer.jsx";
import Classes from "./pages/Classes/Classes.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import About from "./pages/About/about.jsx";
import ContactUs from "./pages/Contact/contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Articles from "./pages/Blog/Articles.jsx";
import Sections from "./pages/Blog/Sections.jsx";
import MeditationPage from "./pages/MeditationPage/MeditationPage.jsx"; 
import FoodPage from "./pages/FoodPage/FoodPage.jsx"; 
import MeditationPracticePage from "./pages/MeditationPracticePage/MeditationPracticePage.jsx"; 
import AccommodationPage from "./pages/AccommodationPage/AccommodationPage.jsx"; 

function App() {
  const location = useLocation();

  const noNavbarRoutes = [
    "/meditation",
    "/food",
    "/meditation-practice",
    "/accommodation",
  ];

  return (
    <>
      {/* Ensure Navbar is displayed for all pages except explicitly excluded ones */}
      {(!noNavbarRoutes.includes(location.pathname) || location.pathname.startsWith("/blog")) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/articles" element={<Articles />} />
        <Route path="/blog/sections" element={<Sections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/meditation" element={<MeditationPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/meditation-practice" element={<MeditationPracticePage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;