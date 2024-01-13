import React from 'react'
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList.js"

import anchor from '../assets/svg/anchor.svg'
import github from '../assets/svg/github.svg'


const Projects = () => {
  return (
    <div className='w-full footer-bg z-10 relative' id='projects'>
        <div className='max-w-[1240px] mx-auto px-4 pt-36 pb-[600px] text-white'>
            <h3 className='text-3xl font-bold text-center mb-10'>Projects</h3>
            <div className='flex flex-wrap content-center justify-center gap-x-[50px] gap-y-16'>
                {projects.map((project, index) => {
					return (
						<Project
							key={index}
                            id={index} 
							title={project.title}
							img={project.img}
						/>
					);
				})}
            </div>
            
        </div>
    </div>
  )
}

const Project = ({ id, title, img }) => {
	const project = projects[id];
    return (
        <div className='bg-transparent-blue rounded-[20px] basis-[360px] backdrop-blur-md'>
            <div>
                <img src={project.img} alt={project.title} />
            </div>
            <div className='p-[30px]'>
                <h4 className='text-xl font-bold mb-5'>{project.title}</h4>
                <p className='text-sm mb-5'><span className='font-bold'>Tech stack : </span>{project.stack}</p>
                <div className='flex gap-x-[50px]'>
                    <a className='underline text-sm hover:opacity-60 ease-in-out duration-500 hover:cursor-pointer flex gap-x-2' href={project.demoLink} target='_blank'>
                        <span><img src={anchor} alt="anchor" /></span>
                        <span>Live Preview</span>
                    </a>
                    <a className='underline text-sm hover:opacity-60 ease-in-out duration-500 hover:cursor-pointer flex gap-x-2' href={project.gitHubLink} target='_blank'>
                        <span><img src={github} alt="github icon" /></span>
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects