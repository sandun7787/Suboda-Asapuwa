import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ease-in-out flex items-center justify-between px-6 py-4 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-10 h-10 mr-2 animate-pulse"
        />
        <Link
          to="/"
          className={`text-xl font-bold no-underline animate-fade ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          SRI SUBODA MEDITATION CENTER
        </Link>
      </div>
      <div
        className={`flex flex-col justify-between w-6 h-5 cursor-pointer md:hidden ${
          isMobileMenuOpen ? "active" : ""
        }`}
        onClick={toggleMobileMenu}
      >
        <span
          className={`block h-0.5 w-full rounded transition-transform ${
            isScrolled ? "bg-gray-800" : "bg-white"
          } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block h-0.5 w-full rounded transition-opacity ${
            isScrolled ? "bg-gray-800" : "bg-white"
          } ${isMobileMenuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block h-0.5 w-full rounded transition-transform ${
            isScrolled ? "bg-gray-800" : "bg-white"
          } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </div>
      <ul
        className={`md:flex items-center list-none p-0 m-0 absolute md:static top-full left-0 right-0 ${
          isScrolled ? "bg-white" : "bg-transparent"
        } md:bg-transparent md:opacity-100 md:translate-y-0 transform ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition duration-300 ease-in-out`}
      >
        <li>
          <Link
            to="/"
            className={`no-underline text-base md:mx-4 mx-0 my-2 md:my-0 transition ${
              isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/schedule"
            className={`no-underline text-base md:mx-4 mx-0 my-2 md:my-0 transition ${
              isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"
            }`}
          >
            Schedule
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`no-underline text-base md:mx-4 mx-0 my-2 md:my-0 transition ${
              isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`no-underline text-base md:mx-4 mx-0 my-2 md:my-0 transition ${
              isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`no-underline text-base md:mx-4 mx-0 my-2 md:my-0 transition ${
              isScrolled ? "text-gray-800 hover:text-pink-400" : "text-white hover:text-pink-400"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
