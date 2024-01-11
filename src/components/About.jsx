import React from 'react'


const About = () => {
  return (
    <div className='about-bg h-[1000px] max-w-[1240px] mx-auto px-4 text-center flex content-center justify-center'>
        <div className='text-white max-w-lg pt-56'>
            <h3 className='text-2xl font-bold mb-3'>About me</h3>
            <p className='text-lg mb-7'>
              My name is Assel. I’m a Front-end Developer based in Almaty, KZ. 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laboriosam ducimus vero 
              molestias similique. Excepturi eveniet inventore deserunt dicta natus nihil itaque veritatis, 
              vitae dolorem ab asperiores dignissimos recusandae dolorum.
            </p>
            <h3 className='text-2xl font-bold mb-3'>My soft skills</h3>
            <ul>
              <li className='text-lg p-1'>Communication</li>
              <li className='text-lg p-1'>Problem Solving</li>
              <li className='text-lg p-1'>Analytical Skills</li>
              <li className='text-lg p-1'>Attention to Details</li>
            </ul>
        </div>
    </div>
  )
}

export default About