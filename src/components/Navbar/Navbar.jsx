import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll'; // Link for smooth scroll between sections

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle mobile menu

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main navbar container */}
      <nav className="top-0 sticky flex justify-between items-center bg-white z-50 px-[15px] py-[15px] lg:py-4 lg:px-24 ">
        
        {/* Logo section */}
        <div className="logo">
          {/* Scrolls smoothly to the hero section */}
          <Link to="hero" offset={0} smooth={true} duration={100}>
            <img src={logo} className="w-[120px] h-[25px] lg:w-[266px] lg:h-[55px] cursor-pointer" alt="Logo" />
          </Link>
        </div>

        {/* Navigation menu (links to different sections) */}
        <div className={`${isMobileMenuOpen ? "flex" : "hidden"} flex-col lg:flex lg:flex-row items-center absolute lg:static top-12 right-0 w-full lg:w-auto bg-white lg:bg-transparent lg:gap-12 py-6 lg:py-0`}>
          <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mb-0">
            {/* About Us link */}
            <li>
              <Link className="text-[#0F172A] font-medium text-lg cursor-pointer" to="about" smooth={true} offset={-100} duration={100}>
                About Us
              </Link>
            </li>
            {/* Pricing link */}
            <li>
              <Link className="text-[#0F172A] font-medium text-lg cursor-pointer" to="pricing" smooth={true} offset={-30} duration={100}>
                Pricing
              </Link>
            </li>
            {/* Testimonials link */}
            <li>
              <Link className="text-[#0F172A] font-medium text-lg cursor-pointer" to="testimonials" smooth={true} offset={-80} duration={100}>
                Testimonials
              </Link>
            </li>
            {/* Contact Us link */}
            <li>
              <Link className="text-[#0F172A] font-medium text-lg cursor-pointer" to="contact" smooth={true} offset={-5} duration={100}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Login and Sign Up section */}
        <div className={`${isMobileMenuOpen ? "flex" : "hidden"} flex-col lg:flex lg:flex-row items-center absolute lg:static top-[275px] lg:top-0 w-full lg:w-auto bg-white lg:bg-transparent py-0 lg:py-0`}>
          <ul className="flex flex-col ml-[-40px] lg:flex-row items-center gap-4 lg:gap-6 mb-0">
            {/* Login button */}
            <li className="login">
              <a href="#login" className="text-[#22739C] cursor-pointer font-medium text-lg">
                Login
              </a>
            </li>
            {/* Sign Up button */}
            <li className="btn cursor-pointer btn-primary bg-primary bg-[#22739C] text-white rounded-full border-[##22739C] px-6 py-3 font-medium text-lg">
              <Link to="signup" smooth={true} offset={0} duration={100}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu toggle (hamburger menu) */}
        <div className="flex flex-col gap-1 cursor-pointer lg:hidden" onClick={toggleMobileMenu}>
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
