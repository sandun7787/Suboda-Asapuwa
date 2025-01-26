import React from "react";
import Navbar from "./component/Navbar/navBar"; // Ensure the file exists and the path is correct
import Home from "./pages/Home/Home.jsx"; // Ensure the file exists and the path is correct
import { Routes, Route } from "react-router-dom"; // Ensure `react-router-dom` is installed
import Footer from "./component/Footer/Footer.jsx";
import Classes from "./pages/Classes/Classes.jsx";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Routes for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
