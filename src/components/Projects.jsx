import React from 'react'
import project from '../assets/img/project1.png'

import anchor from '../assets/svg/anchor.svg'
import github from '../assets/svg/github.svg'


const Projects = () => {
  return (
    <div className='w-full projects-bg'>
        <div className='max-w-[1240px] mx-auto px-4 py-56 text-white'>
            <h3 className='text-3xl font-bold text-center mb-10'>Projects</h3>
            <div className='flex flex-wrap content-center justify-center gap-x-[50px] gap-y-16'>
                <Card 
                    title="Project Title" 
                    desc="This is sample project description random things are here in 
                    description This is sample project lorem ipsum generator for dummy content"
                    stack="HTML , JavaScript, SASS, React"
                />
                <Card 
                    title="Project Title" 
                    desc="This is sample project description random things are here in 
                    description This is sample project lorem ipsum generator for dummy content"
                    stack="HTML , JavaScript, SASS, React"
                />
                <Card 
                    title="Project Title" 
                    desc="This is sample project description random things are here in 
                    description This is sample project lorem ipsum generator for dummy content"
                    stack="HTML , JavaScript, SASS, React"
                />
                <Card 
                    title="Project Title" 
                    desc="This is sample project description random things are here in 
                    description This is sample project lorem ipsum generator for dummy content"
                    stack="HTML , JavaScript, SASS, React"
                />
                <Card 
                    title="Project Title" 
                    desc="This is sample project description random things are here in 
                    description This is sample project lorem ipsum generator for dummy content"
                    stack="HTML , JavaScript, SASS, React"
                />
                <Card 
                    title="Project Title" 
                    desc="This is sample project description random things are here in 
                    description This is sample project lorem ipsum generator for dummy content"
                    stack="HTML , JavaScript, SASS, React"
                />
            </div>
            
        </div>
    </div>
  )
}

const Card = (props) => {
    return (
        <div className='bg-transparent-gray rounded-[20px] basis-[360px]'>
            <div>
                <img src={project} alt="/" />
            </div>
            <div className='p-[30px]'>
                <h4 className='text-xl font-bold mb-5'>{props.title}</h4>
                <p className='mb-4'>{props.desc}</p>
                <p className='text-sm mb-5'><span className='font-bold'>Tech stack : </span>{props.stack}</p>
                <div className='flex gap-x-[50px]'>
                    <a className='underline text-sm hover:text-gray-700 ease-in-out duration-500' href="">
                        <img src={anchor} alt="anchor" />
                        Live Preview
                    </a>
                    <a className='underline text-sm hover:text-gray-700 ease-in-out duration-500' href="">
                        <img src={github} alt="github icon" />
                        View Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects