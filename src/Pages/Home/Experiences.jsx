import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';

function Experiences() {
  const [selectedItem , setSelectedItem ]= useState(0)
  const {  portfolioData } = useSelector((state)=>state.root)
  const { experience } = portfolioData;
  return (
    <div>
        <SectionTitle title="Experience"/>

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
                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40' 
                    : 'text-white' } `} >{experience.period}</h1>
                  </div>
                ))
              }
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className="text-secondary text-xl">
                  {
                    experience[selectedItem].title
                  }
                </h1>
                <h1 className="text-tertiary text-xl">
                  {
                    experience[selectedItem].company
                  }
                </h1>
                <h1 className="text-white text-xl">
                  {
                    experience[selectedItem].description
                  }
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Experiences