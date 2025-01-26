import React from "react";
import Navbar from "./component/Navbar/navBar"; 
import Home from "./pages/Home/Home.jsx"; 
import { Routes, Route } from "react-router-dom"; 
import Footer from "./component/Footer/Footer.jsx";
import Classes from "./pages/Classes/Classes.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import ContactUs from "./pages/Contact/contact.jsx"; 

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Routes for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
