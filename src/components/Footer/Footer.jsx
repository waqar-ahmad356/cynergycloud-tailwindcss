import React from "react";

import logo from "../../assets/logo.png"; // Importing the logo image
import linkedin from "../../assets/linkedin.png"; // Importing the LinkedIn icon
import phone from "../../assets/phone2.png"; // Importing the phone icon
import location from "../../assets/Location.png"; // Importing the location icon
import info from "../../assets/info.png"; // Importing the info icon

// Footer component
const Footer = () => {
  return (
    <div className="pl-[28px] pt-[39px] pr-[49px] pb-[27px] lg:py-[47px] lg:px-[194px]">
      {/* Main footer container */}
      <div className="flex flex-col lg:flex-row lg:justify-between  lg:gap-[47px] gap-[16px]">
        
        {/* Left section of the footer containing the logo and a tagline */}
        <div className="flex flex-col lg:gap-[94px] gap-4 lg:w-[266px]">
          <div className="flex flex-col gap-[4px]">
            <img src={logo} className="w-[266px] h-[55px]" alt="Company Logo" /> {/* Company logo */}
            <p className="mb-0 lg:w-[263px] text-[16px] font-normal leading-5 text-[#0F172A] ">
              Empower Your Team to Communicate, Collaborate, and Create—All in
              One Place!
            </p> {/* Tagline */}
          </div>
          <img src={linkedin} className="w-[23px] h-[23px]" alt="LinkedIn Logo" /> {/* LinkedIn icon */}
        </div>
        
        {/* Center section with quick links */}
        <div className="flex flex-col gap-4 lg:gap-7 lg:w-[229px]">
          <h2 className="text-[#0F172A] text-[24px] lg:text-[28px] leading-8 font-semibold">Quick Links</h2> {/* Section heading */}
          <ul className="ps-0 flex flex-col gap-4 lg:gap-7"> {/* Unordered list for quick links */}
            <li className="text-[16px] lg:text-[24px] text-[#0F172A] leading-6 font-normal">About Us</li>
            <li className="text-[16px] lg:text-[24px] text-[#0F172A] leading-6 font-normal">Testimonials</li>
            <li className="text-[16px] lg:text-[24px] text-[#0F172A] leading-6 font-normal">Pricing</li>
            <li className="text-[16px] lg:text-[24px] text-[#0F172A] leading-6 font-normal">Contact Us</li>
          </ul>
        </div>

        {/* Right section with contact information */}
        <div className="flex flex-col gap-4 lg:gap-5 lg:w-[301px]">
          <h2 className="text-[#0F172A] text-[24px] leading-8 font-semibold">Contact</h2> {/* Section heading */}
          <div className="flex flex-col gap-4 lg:gap-[18px] items-start"> {/* Contact info container */}
            
            {/* Contact info item 1: email */}
            <div className="flex flex-row gap-[9px]  items-start">
              <img className="h-[23px] w-[23px]" src={info} alt="Email Icon" /> {/* Email icon */}
              <p className="text-[16px] lg:text-[24px] text-[#0F172A] leading-6 font-normal">info@synergycloud.com</p> {/* Email address */}
            </div>
            
            {/* Contact info item 2: phone number */}
            <div className="flex flex-row gap-[9px] items-start">
              <img className="h-[23px] w-[23px]"  src={phone} alt="Phone Icon" /> {/* Phone icon */}
              <p className="text-[16px] lg:text-[24px] text-[#0F172A] leading-6 font-normal">650-285-9974</p> {/* Phone number */}
            </div>
            
            {/* Contact info item 3: location */}
            <div className="flex flex-row gap-[9px] items-start">
              <img className="h-[23px] w-[23px]"  src={location} alt="Location Icon" /> {/* Location icon */}
              <p className="text-[16px] lg:text-[24px]   text-[#0F172A] leading-7 font-normal">110 Nottingham Street Boston MA 02090</p> {/* Address */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; // Exporting the Footer component for use in other parts of the app
