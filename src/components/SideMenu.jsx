import React from 'react'
import { FiUser, FiHome } from "react-icons/fi";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineWork, MdLocalPhone } from "react-icons/md";





const SideMenu = () => {
  return (
    <div className='flex flex-col gap-y-12 fixed left-0 top-[7%] py-20 px-4 bg-transparent-gray backdrop-blur-md z-20 rounded-r-[30px]'>
        <div className='p-[14px] bg-gray-300 rounded-[50%]'>
            <FiHome color='white' size={24} />
        </div>
        <div className='p-[14px]'>
            <FiUser color='#0F103F' size={24} />
        </div>
        <div className='p-[14px]'>
            <HiSquare3Stack3D color='#0F103F' size={24} />
        </div>
        <div className='p-[14px]'>
            <MdOutlineWork color='#0F103F' size={24} />
        </div>
        <div className='p-[14px]'>
            <MdLocalPhone color='#0F103F' size={24} />
        </div>
    </div>
  )
}

export default SideMenu