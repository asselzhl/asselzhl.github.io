import React, { useState } from 'react'
import logo from '/logo.svg'
import { HiMenuAlt3, HiX } from "react-icons/hi";



const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <nav className='w-full pt-10 px-4'>
        <ul className='items-center mx-auto text-white justify-between max-w-[793px] hidden md:flex'>
            <li className='p-2.5 hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>About me</li>
            <li className='p-2.5  hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>Skills</li>
            <li className='p-2.5 hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a><img src={logo} alt="/" /></li>
            <li className='p-2.5  hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>Projects</li>
            <li className='p-2.5 hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>Contact</li>
        </ul>

        <div className='block md:hidden'>
          <img src={logo} alt="/" />
        </div>

        <div onClick={handleNav} className='absolute top-10 right-2.5 z-10 p-1 block md:hidden'>
          {!nav ? <HiX color="white" size={30} /> : <HiMenuAlt3 color="white" size={30}/>}
        </div>
        <div className={!nav ? 'fixed right-0 top-0 w-[60%] h-full border-l border-l-[#AB71C6] ease-in-out duration-300 bg-[#0F103F]' : 'fixed right-[-100%] ease-in-out duration-300'}>
          <ul className='text-white flex flex-col items-center justify-center pt-20'>
              <li className='p-5 hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>About me</li>
              <li className='p-5  hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>Skills</li>
              <li className='p-5  hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>Projects</li>
              <li className='p-5 hover:text-[#AB71C6] hover:cursor-pointer duration-500'><a href=""></a>Contact</li>
          </ul>
        </div>
    </nav>
  )
}


export default Navbar