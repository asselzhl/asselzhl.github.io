import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import cv from '../assets/pdf/Assel_Zholaushybay_Frontend_Developer.pdf'

const Home = () => {
  return (
    <div className='my-[-106px] h-[954px] home-bg'>
      <div className='max-w-[1240px] py-[355px] px-4'>
        <div className='pl-10 md:pl-14 lg:pl-20 xl:pl-64'>
            <TypeAnimation
                sequence={[
                    'Hello, world',
                    1000,
                    'Hello, my name is',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                className="text-[#4A72FF] text-2xl font-bold"
            />
            <h1 className='text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-2.5'>Assel Zholaushybay</h1>
            <h2 className='text-2xl sm:text-4xl md:text-5xl text-[#6083FF] font-bold leading-snug mb-8'>I’m a Front-end Developer</h2>
            <a href={cv} download="Assel_Zholaushybay_Frontend_Developer" className='inline-block bg-gradient-to-r from-[#C961DE] to-[#2954A3] hover:scale-110 ease-in-out duration-300 text-white py-3 px-9 rounded-[30px] border border-transparent-white border-solid'>Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default Home