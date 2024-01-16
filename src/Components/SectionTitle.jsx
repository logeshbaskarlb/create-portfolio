import React from 'react'

function SectionTitle({
    title,
}
    
) {
  return (
    <div className='flex gap-8 items-center py-5'>
        <h1 className='text-4xl text-sixth font-semibold'>{title}</h1>
        <div className='w-60 h-[1px] bg-sixth'></div>
    </div>
  )
}

export default SectionTitle