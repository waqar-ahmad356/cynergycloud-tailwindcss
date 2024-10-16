import React from "react";


import MySwiper from "../Swiper/Swiper";

const Testimonials = () => {
  return (
    <div className="testimonials lg:flex lg:flex-col lg:gap-6 gap-[11px] lg:pt-[65px] pt-[28px] pb-[59px] lg:pb-[127px]">
    <div className="flex flex-col lg:gap-0 gap-0 justify-center items-center">
      <h2 className="text-[#0f172a] text-[24px] lg:text-[56px] font-bold lg:leading-[85px]  ">Testimonials</h2>
      <p className=" lg:text-[21px] text-[10px] text-[#6f6c90] font-normal leading-4 lg:leading-8 ">See How Teams Are Thriving with SynergyCloud</p>
      </div>
      <div className="mt-2">
      <MySwiper />
      </div>
    </div>
  );
};

export default Testimonials;
