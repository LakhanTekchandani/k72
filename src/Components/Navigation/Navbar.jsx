import React, { useRef } from "react";
import FullPage from "./FullPage";

const Navbar = ({ setShowFullPage, logoColor = "black", className = ""  }) => {

  const enter=useRef(null);

  return (
    <div className="navbar ${className} flex items-start w-full justify-between   z-10 fixed top-0 left-0">
      <div className="lg:p-3 p-4 sm:w-[9vh] lg:w-[12vh] xl:w-[20vh] md:w-[13vh] w-[11vh] ">
        <svg
          xmlns="http://www.w3.org/2000/svg  "
          className="w-full"
          viewBox="0 0 103 44"
        >
          <path fill={logoColor}
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
      </svg>
      </div>
      <div
  onClick={() => setShowFullPage(true)}
  onMouseEnter={() => {
    enter.current.style.height = "100%";
  }}
  onMouseLeave={() => {
    enter.current.style.height = "0%";
  }}
  className="cursor-pointer lg:h-[5.5vh] h-[5.5vh] md:h-[4.5vh] xl:h-[7vh] relative lg:w-[36.5vw] md:w-[36vw] xl:w-[17vw] w-[50vw] bg-black"
>
  <div
    ref={enter}
    className="absolute w-full h-0 top-0 bg-[#D3FD50] transition-all duration-300"
  ></div>

  <div className="relative h-full lg:px-12 px-10 flex flex-col justify-center items-end lg:gap-1.5 gap-[0.6vh]">
    <div className="lg:w-18 w-16 lg:h-0.5 h-[0.17vh] bg-white"></div>
    <div className="lg:w-10 w-7 lg:h-0.5 h-[0.17vh] bg-white"></div>
  </div>
</div>
    </div>
  );
};

export default Navbar;
