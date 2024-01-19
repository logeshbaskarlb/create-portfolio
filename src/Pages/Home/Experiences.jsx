import React  from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useSelector } from 'react-redux';

function Experiences() {

  const {  portfolioData } = useSelector((state)=>state.root)
  const { experience } = portfolioData;


  return (
    <div>
        <SectionTitle title="Experience"/>

      <div className='mx-20 flex py-10 justify-evenly gap-20 w-4/5  sm:flex-col'>
        <div className='flex flex-wrap gap-10  sm:flex-col '>
          {experience.map((exp, index) => (
            <div key={index} className='bg-gray-800 p-4 rounded-md w-full  '>
              <h1 className="text-xl text-white">{exp.period}</h1>
              <h1 className="text-secondary text-xl">{exp.title}</h1>
              <h1 className="text-tertiary text-xl">{exp.company}</h1>
              <h1 className="text-white text-xl">{exp.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences