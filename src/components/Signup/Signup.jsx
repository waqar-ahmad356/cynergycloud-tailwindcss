import React from "react";

import signup_img from "../../assets/Gif for synergy 1.png"; // Ensure the correct path

const Signup = () => {
  return (
    <div className="lg:px-[200px] px-[12px] lg:bg-[#eeeeee]" id="signup">
      <div className="flex flex-col lg:flex-row lg:py-[120px] lg:justify-center lg:items-center lg:gap-[94px] gap-[49px]">
        
        {/* Signup Form Section */}
        <div className="flex flex-col gap-[40px] lg:gap-[68px]">
          {/* Signup Title */}
          <h2 className="text-[#0F172A] text-[30px] lg:text-[56px] font-semibold">Sign Up</h2>
          
          {/* Signup Form */}
          <form className="flex flex-col items-start justify-between gap-[36px]">
            
            {/* Name Input Field */}
            <div className="flex flex-col items-start gap-0 ">
              <label className="text-[#170F49] text-[14px] lg:text-[28px] font-semibold">Name</label>
              <input
                type="text"
                className="border-b-2 lg:border-b-[3px] border-[#170F49] w-[280px] lg:w-[400px] lg:bg-transparent"
                id="name"
              />
            </div>

            {/* Email Input Field */}
            <div className="flex flex-col items-start gap-0">
              <label className="text-[12px] text-[#170F49] lg:text-[24px] font-normal">Email</label>
              <input
                type="email"
                className="border-b-2 border-[#170F49] w-[280px] lg:w-[400px] lg:bg-transparent"
                id="email"
              />
            </div>

            {/* Password Input Field */}
            <div className="flex flex-col items-start gap-0">
              <label className="text-[12px] text-[#170F49] lg:text-[24px] font-normal">Password</label>
              <input
                type="password"
                className="border-b-2 border-[#170F49] w-[280px] lg:w-[400px] lg:bg-transparent"
                id="password"
              />
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="flex justify-center items-center bg-[#22739C] border-[1.2px] lg:border-[2.5px] border-[#22739C] py-[12px] lg:py-[24px] lg:px-[28px] px-[15px] rounded-full lg:w-[276px] lg:h-[76px] text-[white] lg:text-[21px] text-[11px] font-bold w-[146px] h-[40px]"
            >
              Create Account
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="lg:flex lg:justify-center lg:items-center lg:w-[665px] lg:h-[498px]">
          <img src={signup_img} className="" alt="Signup Visual" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
