import React from "react";
import SectionTitle from "../../Components/SectionTitle";
// import { project } from '../../Resources/Project'
import { useSelector } from "react-redux";

function Projects() {
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="mx-20 flex py-10 gap-20 w-3/4 sm:flex-col">
        <div className="flex flex-wrap gap-10 sm:flex-col">
          {project.map((projects, index) => (
            <div key={index} className="bg-gray-800 p-4 gap-2 rounded-md">
              <h1 className="text-2xl text-white p-4 flex justify-center">
                {" "}
                <span className="text-secondary"> Title :  </span>{"  "}  
                {projects.title}
              </h1>
              <img src={projects.image} width={"200px"} className="m-5" alt="Project PNG" />
              <h1 className="text-xl text-white">
                <span className="text-secondary">Description : </span>
                {projects.description}
              </h1>
              <h1 className="text-xl text-white">
                <span className="text-secondary">Link : </span>
               <a href={projects.link}>Click Here</a>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

// image
// title
// describe
