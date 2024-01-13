import React from 'react'
import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import { ImMail } from "react-icons/im";
import { ListItem } from './Navbar';
import { HashLink as Link } from 'react-router-hash-link';



const Footer = () => {
  return (
    <footer className='w-full bg-[#1C1C65] mt-[-300px]' id='contacts'>
        <div className='px-4 max-w-[1240px] mx-auto pt-[108px]'>
          <div className='border-b border-transparent-gray border-solid pb-14 relative z-30'>
            <ul className='flex items-center mx-auto text-white justify-between max-w-[653px] mb-14'>
            <Link smooth to='#about'>
              <ListItem text='About me' />
            </Link>
            <Link smooth to='#stack'>
              <ListItem text='Tech Stack' />
            </Link>
            <Link smooth to='#projects'>
              <ListItem text='Projects' />
            </Link>
            <Link smooth to='#contacts'>
              <ListItem text='Contacts' />
            </Link>
            </ul>
            <div className='flex items-center justify-between max-w-[250px] mx-auto'>
              <a className='hover:opacity-60 duration-300 ease-in-out' href="https://www.linkedin.com/in/asselzhl/"><SiLinkedin color='white' size={48} /></a>
              <a className='hover:opacity-60 duration-300 ease-in-out' href="mailto:asselzhly@gmail.com"><ImMail color='white' size={48} /></a>
              <a className='hover:opacity-60 duration-300 ease-in-out' href="https://github.com/asselzhl"><SiGithub color='white' size={48} /></a>
              <a className='hover:opacity-60 duration-300 ease-in-out' href="https://t.me/asselzhl"><SiTelegram color='white' size={48} /></a>
            </div>
          </div>
          <p className='pt-[25px] pb-[36px] text-white text-right'>Made by Assel Zholaushybay</p>
        </div>
    </footer>
  )
}

export default Footer