import React from 'react'
import SectionTile2 from '../../Components/SectionTile2';
import { useSelector } from 'react-redux';

function Project2() {

    const {portfolioData} = useSelector((state)=>state.root);
    const { project } = portfolioData

  return (
    <div>
          <SectionTile2 title="Projects" />

          <div className="mx-20 flex py-10 gap-20 w-3/4 sm:flex-col">
        <div className="flex flex-wrap gap-10 sm:flex-col">
          {project.map((projects, index) => (
            <div key={index} className="bg-white p-4 gap-2 rounded-md">
              <h1 className="text-2xl text-black p-4 flex justify-center">
                {" "} 
                <span className="text-sixth"> Title :  </span>{"  "}  
                {projects.title}
              </h1>
              <img src={projects.image} width={"200px"} className="m-5" alt="Project PNG" />
              <h1 className="text-xl text-black">
                <span className="text-sixth">Description : </span>
                {projects.description}
              </h1>
              <h1 className="text-xl text-black">
                <span className="text-sixth">Link : </span>
               <a href={projects.link}>Click Here</a>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project2