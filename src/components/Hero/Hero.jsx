import React from "react";

import arrow from "../../assets/arrow.png"; // Arrow icon for the button
import desktop from "../../assets/desktop-app.png"; // Image for desktop view in hero section
import Autotyping from "../AutoTyping/AutoTyping";

const Hero = () => {
  return (
    <>
      {/* Hero Section: Main container for the hero content */}
      <div
        className="lg:p-[94px] px-[16px] pb-[46px] flex flex-col justify-center items-center gap-[24px] lg:gap-[40px]"
        id="hero"
      >
        {/* Text Content: Heading and description */}
        <div className="flex flex-col justify-center items-center gap-[8px]">
          {/* Hero Heading */}
          <h2 className="text-[#0F172A] lg:text-[56px] text-center font-bold text-[24px]">
            Unlock <Autotyping/> Seamless with SynergyCloud:
            <br /> Where Teams Connect and Ideas Flourish!
          </h2>
          {/* Hero Description */}
          <p className="text-[#0F172A lg:text-[21px] font-normal text-center text-[16px]">
            Empower Your Team to Communicate, Collaborate, and Create—All in One
            Place!
          </p>
        </div>

        {/* Button Section: Start For Free button */}
        <div className="w-[227px] lg:w-[336px] lg:h-[76px] h-[40px] text-white rounded-[58px] lg:py[23px] py-[8px] lg:px[28px] px-[6px] flex justify-center items-center gap-[28px] bg-[#0B608B] ">
          {/* Button Text */}
          <a href="#" className="text-[18px] lg:text-[28px]">
            Start For Free
          </a>
          {/* Arrow Icon */}
          <img src={arrow} alt="" />
        </div>
      </div>

      {/* Image Section: Displays the desktop image and background animation */}
      <div className="lg:px-[94px] relative px-[16px] flex flex-col justify-center items-center lg:w-auto">
        {/* Desktop Image */}
        <img
          src={desktop}
          alt=""
          className="rounded-[6px] lg:w-auto lg:rounded-[23px] lg:border-[6px] border-[1.5px] border-[#4C1D95]"
        />
        {/* Background Animation */}
        <div className="lg:absolute lg:top-[-230px] lg:left-[-100px] lg:w-[1600px] lg:h-[900px] lg:bg-[url('/images/hero-animation.png')] lg:bg-cover bg-cover bg-center lg:bg-center z-[-1]"></div>
      </div>
    </>
  );
};

export default Hero;
