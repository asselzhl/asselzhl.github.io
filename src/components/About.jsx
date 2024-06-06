import React from "react";

import gallup from "../assets/pdf/Assel_Zholaushybay_ClifftonStrengths.pdf";

const style = {
  wrapper: `text-center px-20 sm:py-36 text-white`,
};

const About = () => {
  return (
    <div className={style.wrapper} id="about">
      <h3 className="text-2xl font-bold mb-10">About me</h3>

      <p className="text-lg mb-10">
        I'm a passionate Frontend Developer with hands-on experience from my
        recent internship, where I developed web projects across various
        industries. My foundation in HTML, CSS, JavaScript, React, and
        TypeScript was built through comprehensive coursework and practical
        projects.
      </p>
      <p className="text-lg mb-20">
        I am a quick learner, adaptable, and love coding. I have created several
        projects, showcasing my technical skills and problem-solving abilities.
        Ready to learn and grow, I am seeking new opportunities to contribute
        and enhance my skills in a professional setting.
      </p>

      <h3 className="text-2xl font-bold mb-10">
        My top <span className="text-[#4A72FF]">5 talents</span> according to{" "}
        <a
          href="https://www.gallup.com/cliftonstrengths/en/253715/34-cliftonstrengths-themes.aspx"
          className="underline"
          target="_blank"
        >
          CliftonStrengths 34
        </a>
      </h3>
      <ul className="flex justify-center gap-10 flex-wrap mb-20">
        <li className="text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#7b2481]">
          Responsibility
        </li>
        <li className="text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#00945d]">
          Context
        </li>
        <li className="text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#7b2481]">
          Achiever
        </li>
        <li className="text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#0070cd]">
          Harmony
        </li>
        <li className="text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#00945d]">
          Input
        </li>
      </ul>
      <a
        href={gallup}
        target="_blank"
        className="inline-block bg-gradient-to-r from-[#C961DE] to-[#2954A3] hover:scale-110 ease-in-out duration-300 text-white py-3 px-9 rounded-[30px] border border-transparent-white border-solid"
      >
        View full report
      </a>
    </div>
  );
};

export default About;
