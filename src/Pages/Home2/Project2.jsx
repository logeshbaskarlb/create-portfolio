import React from "react";
import SectionTile2 from "../../Components/SectionTile2";
import { useSelector } from "react-redux";

function Project2() {
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div>
      <SectionTile2 title="Projects" />

      <div className="mx-20 flex py-10 gap-20 w-3/4 md:flex-col">
        <div className="flex flex-wrap gap-10 md:flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 gap-2 rounded-sm w-full md:w-full flex justify-center md:flex md:flex-col"
            >
              <img
                src={project.image}
                width={"200px"}
                className="m-5"
                alt="Project PNG"
              />
              <div className="flex flex-col md:flex md:flex-col">
                <h1 className="text-2xl text-black mb-4">
                  {" "}
                  <span className="text-sixth"> Title : </span>
                  {"  "}
                  {project.title}
                </h1>
                <h1 className="text-xl text-black mb-4">
                  <span className="text-sixth">Description : </span>
                  {project.description}
                </h1>
                <h1 className="text-xl text-black">
                  <span className="text-sixth">Link : </span>
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

export default Project2;
