import React from 'react'
import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import { ImMail } from "react-icons/im";
import { ListItem } from './Navbar';

import logo from '/logo.svg'



const Footer = () => {
  return (
    <footer className='w-full bg-[#1C1C65] mt-[-300px]'>
        <div className='px-4 max-w-[1240px] mx-auto pt-[108px]'>
          <div className='border-b border-transparent-gray border-solid pb-14'>
            <ul className='flex items-center mx-auto text-white justify-between max-w-[653px] mb-14'>
              <ListItem text='About me' />
              <ListItem text='Skills' />
              <ListItem text='Projects' />
              <ListItem text='Contacts' />
            </ul>
            <div className='flex items-center justify-between max-w-[250px] mx-auto'>
              <a className='hover:opacity-60 duration-300 ease-in-out' href=""><SiLinkedin color='white' size={48} /></a>
              <a className='hover:opacity-60 duration-300 ease-in-out' href=""><ImMail color='white' size={48} /></a>
              <a className='hover:opacity-60 duration-300 ease-in-out' href=""><SiGithub color='white' size={48} /></a>
              <a className='hover:opacity-60 duration-300 ease-in-out' href=""><SiTelegram color='white' size={48} /></a>
            </div>
          </div>
          <p className='pt-[25px] pb-[36px] text-white text-right'>Made by Assel Zholaushybay</p>
        </div>
    </footer>
  )
}

export default Footer