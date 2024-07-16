import React from "react";

import { projects } from "../helpers/projectsList.js";

import anchor from "../assets/svg/anchor.svg";
import github from "../assets/svg/github.svg";

const Projects = () => {
  return (
    <div className="w-full  z-10 relative" id="projects">
      <div className="max-w-[1240px] mx-auto px-4 pt-16 sm:pt-32 pb-[600px] text-white">
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>

        <div className="flex flex-wrap gap-8 justify-center">
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
  );
};

const Project = ({ id, title, img }) => {
  const project = projects[id];
  return (
    <div className="bg-transparent-blue rounded-[20px] border border-[#FFFFFF4D] basis-[200px] sm:basis-[360px] grow-0 shrink-0 backdrop-blur-md">
      <div>
        <img
          src={project.img}
          alt={project.title}
          className="rounded-t-[20px]"
        />
      </div>
      <div className="p-5 sm:p-[30px]">
        <h4 className="sm:text-xl font-bold mb-5">{project.title}</h4>
        <p className="text-base  mb-5">
          <span className="font-bold">Tech stack : </span>
          {project.stack}
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-x-[50px]">
          {project.demoLink && (
            <a
              className="underline text-sm hover:opacity-60 ease-in-out duration-500 hover:cursor-pointer flex gap-x-2"
              href={project.demoLink}
              target="_blank"
            >
              <span>
                <img src={anchor} alt="anchor" />
              </span>
              <span>Live Preview</span>
            </a>
          )}
          <a
            className="underline text-sm hover:opacity-60 ease-in-out duration-500 hover:cursor-pointer flex gap-x-2"
            href={project.gitHubLink}
            target="_blank"
          >
            <span>
              <img src={github} alt="github icon" />
            </span>
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
