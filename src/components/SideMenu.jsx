import React from 'react'
import { FiUser, FiHome } from "react-icons/fi";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineWork, MdLocalPhone } from "react-icons/md";


const SideMenu = () => {
  return (
    <nav className='flex flex-col gap-y-12 fixed left-0 top-[7%] py-20 px-4 bg-transparent-gray opacity-50 hover:opacity-100 ease-in-out duration-300 backdrop-blur-md z-20 rounded-r-[30px]'>
        <div className='p-[14px] hover:cursor-pointer bg-gray-300 rounded-[50%]'>
            <FiHome color='white' size={24} />
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <FiUser color='#0F103F' size={24} />
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <HiSquare3Stack3D color='#0F103F' size={24} />
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <MdOutlineWork color='#0F103F' size={24} />
        </div>
        <div className='p-[14px] hover:cursor-pointer'>
            <MdLocalPhone color='#0F103F' size={24} />
        </div>
    </nav>
  )
}

export default SideMenu