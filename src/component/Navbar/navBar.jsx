import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      setIsDropdownOpen(false);
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-500 ease-in-out flex items-center justify-between px-6 py-4 ${
        isScrolled ? "bg-white shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-10 h-10 mr-2" 
        />
        <Link to="/" className={`text-xl font-bold no-underline animate-fade ${isScrolled ? "text-black" : "text-white"}`}>SRI SUBODA MEDITATION CENTER</Link>
      </div>

      <ul className={`md:flex items-center list-none p-0 m-0 absolute md:static top-full left-0 right-0 ${isScrolled ? "bg-white" : "bg-transparent"} md:bg-transparent md:opacity-100 md:translate-y-0 transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} transition duration-500 ease-in-out`}>
        <motion.li whileTap={{ scale: 0.9 }}><Link to="/" className={`no-underline text-base md:mx-4 transition hover:scale-105 ${isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"}`}>Home</Link></motion.li>
        <motion.li whileTap={{ scale: 0.9 }}><Link to="/schedule" className={`no-underline text-base md:mx-4 transition hover:scale-105 ${isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"}`}>Schedule</Link></motion.li>
        <motion.li whileTap={{ scale: 0.9 }}><Link to="/about" className={`no-underline text-base md:mx-4 transition hover:scale-105 ${isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"}`}>About</Link></motion.li>
        
        <li className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <button className={`no-underline text-base md:mx-4 transition hover:scale-110 outline-none focus:ring-0 focus:outline-none ${isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"}`}>Blog</button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.7, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 overflow-hidden border border-gray-300"
              >
                <motion.li whileHover={{ scale: 1.1 }}><Link to="/blog/articles" className="block px-4 py-2 text-gray-800 hover:bg-pink-100">Articles</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }}><Link to="/blog/sections" className="block px-4 py-2 text-gray-800 hover:bg-pink-100">Sections</Link></motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        
        <motion.li whileTap={{ scale: 0.9 }}><Link to="/contact" className={`no-underline text-base md:mx-4 transition hover:scale-105 ${isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"}`}>Contact</Link></motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;
