import React from "react";
import Navbar from "./component/Navbar/navBar";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./component/Footer/Footer.jsx";
import Classes from "./pages/Classes/Classes.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import About from "./pages/About/about.jsx"
import ContactUs from "./pages/Contact/contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import MeditationPage from "./pages/MeditationPage/MeditationPage.jsx"; // Import the Meditation page
import FoodPage from "./pages/FoodPage/FoodPage.jsx"; // Import the Food page
import MeditationPracticePage from "./pages/MeditationPracticePage/MeditationPracticePage.jsx"; // Import the Meditation Practice page
import AccommodationPage from "./pages/AccommodationPage/AccommodationPage.jsx"; // Import the Accommodation page

function App() {
  const location = useLocation(); // Get the current route

  // List of routes where the Navbar should not be displayed
  const noNavbarRoutes = [
    "/meditation",
    "/food",
    "/meditation-practice",
    "/accommodation",
  ];

  return (
    <>
      {/* Conditionally Render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      {/* Routes for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/meditation" element={<MeditationPage />} /> {/* New Route */}
        <Route path="/food" element={<FoodPage />} /> {/* New Route */}
        <Route path="/meditation-practice" element={<MeditationPracticePage />} /> {/* New Route */}
        <Route path="/accommodation" element={<AccommodationPage />} /> {/* New Route */}
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
