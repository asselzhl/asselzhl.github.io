import React from 'react'


const About = () => {
  return (
    <div className='about-bg h-[1000px] max-w-[1240px] mx-auto px-4 text-center flex content-center justify-center'>
        <div className='text-white max-w-lg pt-52'>
            <h3 className='text-2xl font-bold mb-3'>About me</h3>
            <p className='text-lg mb-7'>
              My name is Assel and I'm Front-end Developer on a journey of career transformation.
              With a passion for learning and an arsenal of pet projects, I'm constantly expanding my skill set and embracing the latest technologies.
              Currently honing my skills with the cutting-edge Front-end Development course provided by EPAM Systems.
              When I’m not at the computer, I’m usually painting, making candles or cooking.
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