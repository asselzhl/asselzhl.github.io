import React from 'react'


const About = () => {
  return (
    <div className='about-bg max-w-[1240px] mx-auto px-4 py-52 text-center flex content-center justify-center' id='about'>
        <div className='text-white self-center max-w-4xl'>
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
            <ul className='flex justify-center gap-10 flex-wrap'>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Communication</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Collaboration</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Problem Solving</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Analytical Skills</li>
              <li className='text-lg p-2.5 border border-white rounded-3xl'>Attention to Details</li>
            </ul>
        </div>
    </div>
  )
}

export default About