import React from 'react'

function SectionTile2({title}) {
  return (
    <div>
        <div className='flex gap-10 items-center py-10'>
        <h1 className='text-2xl text-sixth font-semibold'>{title}</h1>
        <div className='w-60 h-[1px] bg-sixth'></div>
        </div>
    </div>
  )
}

export default SectionTile2