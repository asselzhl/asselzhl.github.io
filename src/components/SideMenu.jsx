import React from 'react'
import { FiUser, FiHome } from "react-icons/fi";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineWork, MdLocalPhone } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';

const SideMenu = () => {
  return (
    <nav className='flex flex-col items-center justify-center gap-y-12 fixed left-0 top-[10%] h-[80vh] py-20 px-4 bg-transparent-gray opacity-50 hover:opacity-100 ease-in-out duration-300 backdrop-blur-md z-20 rounded-r-[30px]'>
        <div className='p-[14px] hover:cursor-pointer bg-gray-300 rounded-[50%]'>
            <FiHome color='white' size={24} />
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <Link smooth to='#about'>
                <FiUser color='#0F103F' size={24} />
            </Link>
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <Link smooth to='#stack'>
                <HiSquare3Stack3D color='#0F103F' size={24} />
            </Link>
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <Link smooth to='#projects'>
                <MdOutlineWork color='#0F103F' size={24} />
            </Link>
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <Link smooth to='#contacts'>
                <MdLocalPhone color='#0F103F' size={24} />
            </Link>
        </div>
    </nav>
  )
}

export default SideMenu