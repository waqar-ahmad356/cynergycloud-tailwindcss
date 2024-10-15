import React from "react";

import about_img from '../../assets/right.png'; // Importing the image to be used in the component

// About component definition
const About = () => {
  return (
    <div className="px-16px lg:p-[94px]">
      <div className="flex flex-col-reverse lg:flex-row lg:gap-[94px] gap-4 justify-center items-center ">
        {/* Image section */}
        <div className="flex justify-center items-center">
          <img src={about_img} alt="" className=" lg:w-[700px] lg:h-[502px] w-[262px] h-[209px]"/> {/* Displaying the image */}
        </div>
        
        {/* Content section */}
        <div className="flex flex-col lg:justify-center  justify-start items-start  ">
          <h2 className="text-[24px] lg:text-[65px] lg:font-extrabold font-bold text-[#0F172A] mb-0">About Us</h2> {/* Section title */}
          <p className="mb-0 leading-7 lg:text-[24px] lg:leading-10 lg:w-[600px] lg:h-[252px] text-[16px] font-normal text-[#0F172A]">
            {/* Description text */}
            At SynergyCloud, we believe that seamless communication is the
            backbone of productive teams. Designed for the modern workplace, our
            platform fosters real-time collaboration, efficient communication,
            and organized workflows. Whether your team is remote, hybrid, or
            in-office, we make staying connected effortless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; // Exporting the component for use in other parts of the application
