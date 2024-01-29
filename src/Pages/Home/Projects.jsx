import React from "react";
import SectionTitle from "../../Components/SectionTitle";
// import { project } from '../../Resources/Project'
import { useSelector } from "react-redux";

function Projects() {
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="mx-20 flex py-10 gap-20 w-3/4 md:flex-col">
        <div className="flex flex-wrap gap-10 md:flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 gap-2 rounded-sm w-full md:w-full  flex justify-center md:flex md:flex-col"
            >
              <img
                src={project.image}
                width={"200px"}
                className="m-5 "
                alt="Project PNG"
              />
              <div className="flex flex-col md:flex md:flex-col">
                <h1 className="text-2xl text-white mb-4">
                  <span className="text-secondary">Title : </span>
                  {"  "}
                  {project.title}
                </h1>
                <h1 className="text-xl text-white mb-4">
                  <span className="text-secondary">Description : </span>
                  {project.description}
                </h1>
                <h1 className="text-xl text-white">
                  <span className="text-secondary">Link : </span>
                  <a href={project.link}>Click Here</a>
                </h1>
              </div>
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
