import React, { useState } from 'react'
import SectionTile2 from '../../Components/SectionTile2'
import { useSelector } from 'react-redux';

function Experience2() {

    const [selectedItem , setSelectedItem ]= useState(0)
  const {  portfolioData } = useSelector((state)=>state.root)
  const { experience } = portfolioData;

  return (
    <div>
        <SectionTile2 title="Experience" />

        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 
            sm:flex-row sm:overflow-x-scroll sm:w-full'>
              {
                experience.map((experience,index)=>(
                  <div onClick={()=>{
                    setSelectedItem(index);
                  }} className='cursor-pointer'>
                    <h1 className={`text-xl px-10
                    ${selectedItem === index 
                    ? 'text-sixth border-white border-l-4 -ml-[3px] bg-white py-3 sm:w-40' 
                    : 'text-fifth' } `} >{experience.period}</h1>
                  </div>
                ))
              }
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className="text-sixth text-2xl">
                  {
                    experience[selectedItem].title
                  }
                </h1>
                <h1 className="text-fifth  border-fifth text-xl underline">
                  {
                    experience[selectedItem].company
                  }
                </h1>
                <h1 className="text-fifth text-xl">
                  {
                    experience[selectedItem].description
                  }
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Experience2