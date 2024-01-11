import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Welcome = () => {
  return (
    <div className='my-[-106px] w-full h-[954px] welcome-bg py-[350px] pl-[256px]'>
        <div>
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
            <h1 className='text-white text-6xl font-bold leading-snug'>Assel Zholaushybay</h1>
            <h2 className='text-[54px] text-[#6083FF] font-bold leading-snug'>I’m a Front-end Developer</h2>
        </div>
    </div>
  )
}

export default Welcome