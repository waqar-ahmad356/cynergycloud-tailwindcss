import React from "react";

import phone from "../../assets/phone.png"; // Importing phone image
import location from "../../assets/location2.png"; // Importing location image
import email from "../../assets/email.png"; // Importing email image
import './Contact.css'

// Contact component definition
const Contact = () => {
  return (
    <div className="px-[13px] lg:py-[89px] lg:pl-[191px] lg:pr-[194px] mb-[39px] mt-[17px]" id="contact">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-[39px] lg:p-[11px] lg:gap-[35px] lg:bg-[#ffffff] rounded-[12px] lg:shadow-custom ">
        
        {/* Contact Us section */}
        <div className="flex contact-us lg:after:absolute   flex-col lg:w-[800px] lg:h-[750px] lg:px-[47px] lg:py-[47px] items-start gap-[9px] lg:gap-[131px] p-[16px] bg-[#22739C] rounded-[12px]">
          <div className="flex flex-col gap-[9px] lg:gap-[0.5px]">
            <h2 className="text-[24px] lg:text-[38px] lg:font-bold font-semibold text-white">Contact Us</h2> {/* Section heading */}
            <p className="text-[16px] lg:text-[24px]  text-[#C9C9C9] font-normal">Say something to start a live chat!</p> {/* Introductory text */}
          </div>

          {/* Contact information items */}
          <div className="flex flex-col gap-[9px] lg:gap-[56px]">
            <div className="flex flx-row items-start gap-2 lg:gap-[29px] ">
              <img src={phone} className="w-[19px] h-[21px] lg:w-[28px] lg:h-[28px]" alt="" /> {/* Phone icon */}
              <p className="mb-0 text-[16px] lg:text-[24px] font-normal text-white">+1012 3456 789</p> {/* Phone number */}
            </div>
            <div className="flex flx-row items-start gap-2 lg:gap-[29px] ">
              <img src={email}  className="w-[19px] h-[19px] lg:w-[28px] lg:h-[28px]" alt="" /> {/* Email icon */}
              <p className="mb-0 text-[16px] lg:text-[24px] font-normal text-white">demo@gmail.com</p> {/* Email address */}
            </div>
            <div className="flex flx-row items-start gap-2 lg:gap-[29px] ">
              <img src={location}  className="w-[19px] h-[21px] lg:w-[28px] lg:h-[28px]" alt="" /> {/* Location icon */}
              <p className="mb-0 text-[16px]   lg:w-[400px] lg:text-[24px] font-normal text-white">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p> {/* Physical address */}
            </div>
           
          </div>
          
          
        </div>

        {/* Contact form section */}
        <div class="sm:pr-[23px] lg:gap-[52px] pl-[19px] lg:mt-[100px] lg:w-[668px]">
          <form class="flex flex-col items-start gap-2 lg:gap-[95px]">
            
            {/* First and Last Name Fields */}
            <div class="flex flex-col lg:flex-row gap-2 lg:gap-[28px]">
              <div class="flex flex-col  gap-2 lg:gap-4">
                <label for="input1" className="text-[20px] lg:text-[28px] text-black font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  class="border-b-[2px] border-[#011C2A] w-[330px] lg:w-[220px] focus:outline-none focus:shadow-none placeholder:text-[23px] placeholder:text-[#011C2A] placeholder:font-semibold "
                  id="input1"
                  placeholder="Shaoor"
                />
              </div>
              <div class="flex flex-col gap-2 lg:gap-4">
                <label for="input2" className="text-[20px] lg:text-[28px] text-black font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  class="border-b-[2px] border-[#011C2A] w-[330px] lg:w-[220px] placeholder:text-[#B3B3B3] focus:outline-none focus:shadow-none placeholder:text-[16px] placeholder:font-semibold"
                  id="input2"
                  placeholder="I"
                />
              </div>
             
            </div>
            

            {/* Email and Phone Number Fields */}
            <div class="flex flex-col lg:flex-row lg:gap-[28px]">
              <div class="flex flex-col gap-2 lg:gap-4">
                <label
                  for="input3"
                  className="text-[20px] text-black font-semibold lg:text-[#8D8D8D] lg:text-[28px]"
                >
                  Email
                </label>
                <input
                  type="text"
                  class="border-b-[2px] lg:border-[#8D8D8D] border-[#011C2A] w-[330px]  lg:w-[220px] placeholder:text-[#B3B3B3] focus:outline-none focus:shadow-none placeholder:text-[16px] placeholder:font-semibold"
                  id="input3"
                  placeholder=""
                />
              </div>
              <div class="flex flex-col gap-2 lg:gap-4">
                <label for="input4" className="text-[20px] lg:text-[28px] text-black font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="border-b-[2px] lg:border-[#8D8D8D] border-[#011C2A] w-[330px] lg:w-[220px] placeholder:text-[#011C2A] focus:outline-none focus:shadow-none placeholder:text-[16px] lg:placeholder:text-[24px] placeholder:font-semibold"
                  id="input4"
                  placeholder="+92-3124700158"
                />
            </div>
              
              </div>
             

            {/* Message Text Area */}
            <div class="flex flex-col gap-2 lg:gap-4">
              <label
                for="textarea"
                className="text-[20px] lg:text-[#8D8D8D] lg:text-[28px] text-black font-semibold"
              >
                Message
              </label>
              <textarea
                class="border-b-[2px] lg:border-[#8D8D8D] border-[#011C2A] lg:w-[470px] w-[330px] resize-none focus:outline-none focus:shadow-none placeholder:text-[#B3B3B3] placeholder:text-[16px] placeholder:font-semibold"
                id="textarea"
                rows="1"
                placeholder="I"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="lg:mt-[-40px] lg:ml-[210px] ms-[180px]">
              <button type="submit" class=" text-[16px] text-white font-semibold lg:w-[261px] lg:h-[75px] lg:text-[21px] lg:font-bold py-[6px] px-4 w-[148px] h-[33px] bg-[#22739C] border-solid-[2.5px] border-[#22739C] rounded-[58px]">
                Send Message
              </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; // Exporting the component for use in other parts of the application
