import React from 'react'

import gallup from '../assets/pdf/Assel_Zholaushybay_ClifftonStrengths.pdf'

const About = () => {
  return (
    <div className='about-bg text-center py-36' id='about'>
        <div className='text-white self-center max-w-[1240px] mx-auto flex content-center justify-center px-4'>
          <div className='max-w-4xl'>
            <h3 className='text-2xl font-bold mb-3'>About me</h3>
            <p className='text-lg mb-7'>
              My name is Assel and I'm Front-end Developer on a journey of career transformation.
              With a passion for learning and an arsenal of projects, I'm constantly expanding my skill set and embracing the latest technologies.
              Currently honing my skills with the cutting-edge Front-end Development course provided by EPAM Systems.
            </p>
            <p className='text-lg mb-20'>
              As an experienced data analyst with a passion for technology, I have spent the past two years analyzing complex data sets.
              However, my strong interest in programming languages and the desire to create visually stunning websites led me to make a career change. 
              My love for front-end development stems from the sheer joy of creating visually stunning websites that resemble pieces of art. I'm excited to bring my skills and creativity to build exceptional web experiences.
            </p>
            <h3 className='text-2xl font-bold mb-10'>My soft skills</h3>
            <ul className='flex justify-center gap-10 flex-wrap mb-20'>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Communication</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Collaboration</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Problem Solving</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Analytical Skills</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Attention to Details</li>
            </ul>
            <h3 className='text-2xl font-bold mb-10'>My top <span className='text-[#4A72FF]'>5 talents</span> according to <a href="https://www.gallup.com/cliftonstrengths/en/253715/34-cliftonstrengths-themes.aspx" className='underline' target='_blank'>CliftonStrengths 34</a></h3>
            <ul className='flex justify-center gap-10 flex-wrap mb-20'>
              <li className='text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#7b2481]'>Responsibility</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#00945d]'>Context</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#7b2481]'>Achiever</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#0070cd]'>Harmony</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl basis-[145px] bg-[#00945d]'>Input</li>
            </ul>
            <a href={gallup} target='_blank' className='inline-block bg-gradient-to-r from-[#C961DE] to-[#2954A3] hover:scale-110 ease-in-out duration-300 text-white py-3 px-9 rounded-[30px] border border-transparent-white border-solid'>View full report</a>
          </div>
        </div>
    </div>
  )
}

export default About