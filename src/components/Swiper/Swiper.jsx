import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "./Swiper.css"; // Custom styles
import testimonial_icon from "../../assets/testimonial-icon.png";

const MySwiper = () => {
  return (
    <div className="lg:p-0 overflow-x-hidden  ">
      <Swiper
        spaceBetween={22}
        slidesPerView={5} // Show 5 slides on larger screens
        centeredSlides={true} // Center the active slide
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        loop={true} // Enable looping
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3, // Show 3 slides on medium screens
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5, // Show 5 slides on larger screens
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]} className="p-0"
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide key={index} className="lg:w-[calc(20%-20px)] w-[calc(60%-20px)] flex justify-center lg:gap-2 ">
            <div className="flex flex-col lg:p-7 p-3 lg:gap-[96px] gap-[41px] bg-[#eeeeee] lg:w-[500px] w-[200px] rounded-[12px] ">
            <div className="flex flex-col gap-1 lg:gap-[10px]">
              <img
                src={testimonial_icon} className="lg:w-[79px] lg:h[84px] w-[35px] h-[37px]"
                alt={`Client ${index + 1}`}
                
              />
              <p className="lg:text-[28px] text-[#413D45] lg:font-normal lg:leading-9 lg:tracking-[-0.75px] ">
                Our remote team finally feels connected. The channels and
                integrations make.
              </p>
              </div>
              <div >
                <p className="lg:text-[12px] lg:text-[#413D45] text-[#67646A] text-[8px] leading-2 font-normal lg:leading-5 lg:tracking-[-0.147px]"> Jhone Company XYZ</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
