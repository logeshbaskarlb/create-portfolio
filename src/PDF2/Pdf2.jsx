import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {setSelectedHome} from "../redux/rootSlice"
import image from "../Images/image.png";
import image2 from "../Images/image2.png";


function Pdf2() {
  const selectedHome = useSelector((state)=> state.root.selectedHome);
  const dispatch  = useDispatch();

  const handleSelectHome = (homeKey) =>{
    console.log(homeKey)
    dispatch (setSelectedHome(homeKey))
  }
  console.log(selectedHome)

  const items = [
    {
      id: 1,
      src: image,
      link: "/home",
     
    },
    {
      id: 2,
      src: image2,
      link: "/admin",
    },
  ];
  return (
    <div className="bg-primary h-[100%] m-0 p-0">
      <div
        name=""
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen text-center md:text-left"
      >
        <div className=" p-4  flex flex-col justify-evenly ">
          <div className="pb-8">
            <p className="text-4xl font-bold py-5 border-b-4 border-gray-500">
            If you want to change the Template or else select the same template
            </p>
            <p className="py-6">
            <span className="text-sixth">Get your Portfolio</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-3 mx-10 gap-8 sm:px-5">
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <Link
                    className="w-1/2 px-6 py-3 m-4 duration-200  hover:bg-pink  bg-white text-black  rounded-lg"
                    to={link}
                  >
                    Select
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="m-10 p-40 text-7xl text-gray-700 hover:text-white">
            Coming Soon <span>...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdf2;
