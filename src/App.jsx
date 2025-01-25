import React from "react";
import Navbar from "./component/Navbar/navBar"; // Ensure the file exists and the path is correct
import Home from "./pages/Home/Home.jsx"; // Ensure the file exists and the path is correct
import { Routes, Route } from "react-router-dom"; // Ensure `react-router-dom` is installed

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Routes for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
