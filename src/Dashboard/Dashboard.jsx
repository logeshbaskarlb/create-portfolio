import React from "react";

import Admin from "../Pages/Admin/Admin";


function Dashboard() {
  const items = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: <Admin />,
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '',
    },
   
  ];
  return (
    <div className="bg-primary h-[100%] m-0 p-0">
       <div
        name=''
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen text-center md:text-left'
      >
        <div className=' p-4  flex flex-col justify-evenly '>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                Welcome to Dashboard
            </p>
            <p className='py-6'>You can choose your own templete below</p>
          </div>

          <div className='grid sm:grid-cols-2 grid-cols-3 mx-10 gap-8 sm:px-5'>
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
              >
                <img
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200  hover:scale-10 bg-white text-black  rounded-lg'
                    onClick={() => {}}
                  >
                    Select 
                  </button>
                 
                </div>
              </div>
            ))}
          </div>
          <div className="m-10 p-40 text-7xl text-gray-700 hover:text-white">Coming Soon <span>...</span></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
