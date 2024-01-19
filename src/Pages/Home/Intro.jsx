import React from 'react'
import { useSelector } from 'react-redux'

function Intro() {
  const {  portfolioData } = useSelector((state)=>state.root)
  const { intro } = portfolioData;
  const { firstName ,lastName , welcomeText , description , caption } = intro

  return (
    <div className='mx-20 h-[70vh] bg-primary flex flex-col items-start justify-center gap-5 py-10 '>
        <h1 className='text-white text-xl'>{welcomeText || '' }</h1>
        <h1 className='text-7xl sm:text-4xl text-secondary font-semibold'>
            {firstName || ''} {lastName || ''}
        </h1>
        <h1 className='text-7xl sm:text-3xl text-white font-semibold'> 
            {caption || ''}
        </h1>
        <p className='text-white  text-xl sm:text-sm w-2/3'>
           {description || ''}
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
            Get Started
        </button>
    </div>
  )
}

export default Intro