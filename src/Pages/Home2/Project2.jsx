import React, { useState } from 'react'
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';

function Project2() {

    const [selectedItem ,setSelectedItem ] = useState(0);
    const {portfolioData} = useSelector((state)=>state.root);
    const { project } = portfolioData

  return (
    <div>
          <SectionTitle title="Projects" />

<div className="flex py-10 gap-20 sm:flex-col">
  <div
    className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 
      sm:flex-row sm:overflow-x-scroll sm:w-full"
  >
    {project.map((project, index) => (
      <div
        onClick={() => {
          setSelectedItem(index);
        }}
        className="cursor-pointer"
      >
        <h1
          className={`text-xl px-10
              ${
                selectedItem === index
                  ? "text-sixth border-fifth border-l-4 -ml-[2px] bg-white py-3 sm:w-40"
                  : "text-fifth"
              } `}
        >
          {project.title}
        </h1>
      </div>
    ))}
  </div>

  <div className="flex items-center justify-center gap-10 sm:flex-col">
      <img src={project[selectedItem].image} alt="" className="h-60 w-72"/>
  <div className="flex flex-col gap-5">
    <h1 className="text-sixth text-xl">
      {project[selectedItem].title}
    </h1>
   
    <h1 className="text-fifth text-xl">
      {project[selectedItem].describe }
    </h1>
  </div>
  </div>
</div>
    </div>
  )
}

export default Project2