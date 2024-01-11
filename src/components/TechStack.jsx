import React from 'react'
import js from '../assets/svg/stack/js.svg';
import react from '../assets/svg/stack/react.svg';
import bootstrap from '../assets/svg/stack/bootstrap.svg';
import css from '../assets/svg/stack/css.svg';
import git from '../assets/svg/stack/git.svg';
import html from '../assets/svg/stack/html.svg';
import sass from '../assets/svg/stack/sass.svg';
import tailwind from '../assets/svg/stack/tailwind.svg';
import webpack from '../assets/svg/stack/webpack.svg';
import vite from '../assets/svg/stack/vite.svg';


const TechStack = () => {
  return (
    <div>
        <div className='text-white w-full px-4'>
            <div className='bg-transparent-blue rounded-[30px] border border-[#FFFFFF4D] border-solid backdrop-blur-[10px] py-12 px-20'>
                <h3 className='text-center text-2xl font-bold mb-10'>My Tech Stack</h3>
                <div className='flex gap-x-24 gap-y-16 flex-wrap content-center justify-center'>
                    <Card src={js} name='JavaScript' alt='js' />
                    <Card src={react} name='React' alt='react' />
                    <Card src={html} name='HTML' alt='html' />
                    <Card src={css} name='CSS' alt='css' />
                    <Card src={sass} name='SASS' alt='sass' />
                    <Card src={bootstrap} name='Bootstrap' alt='bootstrap' />
                    <Card src={tailwind} name='Tailwind CSS' alt='tailwind' />
                    <Card src={webpack} name='Webpack' alt='webpack' />
                    <Card src={vite} name='Vite' alt='vite' />
                    <Card src={git} name='Git' alt='git' />
                </div>
            </div>
        </div>
    </div>
  )
}

const Card = (props) => {
    return (
        <div className='basis-32 grow-0 shrink flex flex-col text-center'>
            <img className='basis-[128px] grow-0 shrink-0' src={props.src} alt={`${props.alt} icon`} />
            <span className='text-lg mt-3'>{props.name}</span>
        </div>
    )
}


export default TechStack