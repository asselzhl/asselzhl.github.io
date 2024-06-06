import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScrollToTop from "react-scroll-to-top";
import cv from "../assets/pdf/Assel_Zholaushybay_Frontend_Developer.pdf";

const Home = () => {
  return (
    <div className="my-[-106px]" id="home">
      <div className="max-w-[1240px] pt-52 pb-60 sm:pt-80 sm:pb-[355px] px-4">
        <div className="pl-10 md:pl-14 lg:pl-20 xl:pl-64">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-2.5">
            Assel Zholaushybay
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#6083FF] font-bold leading-snug mb-8">
            Front-end Developer
          </h2>
          <a
            href={cv}
            target="_blank"
            className="inline-block bg-gradient-to-r from-[#C961DE] to-[#2954A3] hover:scale-110 ease-in-out duration-300 text-white py-3 px-9 rounded-[30px] border border-transparent-white border-solid"
          >
            Download CV
          </a>
        </div>
        <div>
          <ScrollToTop smooth color="white" className="scroll-to-top" />
        </div>
      </div>
    </div>
  );
};

export default Home;
