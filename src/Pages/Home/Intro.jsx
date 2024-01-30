import React from 'react'
import { useSelector } from 'react-redux'

function Intro() {
  const {  portfolioData } = useSelector((state)=>state.root)
  const { intro } = portfolioData;
  const { firstName ,lastName , welcomeText , description , caption } = intro

  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-5 py-10 '>
        <h1 className='text-white '>{welcomeText || '' }</h1>
        <h1 className='text-7xl md:text-4xl  text-secondary font-semibold'>
            {firstName || ''} {lastName || ''}
        </h1>
        <h1 className='text-5xl md:text-3xl text-white font-semibold '> 
            {caption || ''}
        </h1>
        <p className='text-white  md:text-sm w-2/3'>
           {description || ''}s
        </p>

        
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
            Get Into It
        </button>
    </div>
  )
}

export default Intro