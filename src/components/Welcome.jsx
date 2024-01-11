import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Welcome = () => {
  return (
    <div className='my-[-106px] w-full h-[954px] welcome-bg py-[355px] px-4'>
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
            <h2 className='text-2xl sm:text-4xl md:text-5xl text-[#6083FF] font-bold leading-snug'>I’m a Front-end Developer</h2>
        </div>
    </div>
  )
}

export default Welcome