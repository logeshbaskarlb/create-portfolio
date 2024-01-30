import React from "react";
import { Link } from "react-router-dom";
import image from "../Images/image.png";
import image2 from "../Images/image2.png";
import { useSelector } from "react-redux";

function Pdf2() {
  const selectedHome = useSelector((state) => state.root.selectedHome);



  console.log(selectedHome);
  const items = [
    {
      id: 1,
      src: image,
      link: "/home",
    },
    {
      id: 2,
      src: image2,
      link: "/home2",
    },
  ];

  return (
    <div className="bg-primary h-[100%] m-0 p-0">
      <div
        name=""
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full text-center "
      >
        <div className=" p-4  flex flex-col justify-evenly ">
          <div className="pb-8">
            <p className="text-4xl font-bold py-5 border-b-4 border-gray-500">
              If you want to change the Template or else select the same
              template
            </p>
            <p className="py-6">
              <span className="text-sixth">Get your Portfolio</span>
            </p>
          </div>

          <div className="grid md:grid-cols-1 grid-cols-2 mx-8 gap-8 md:px-5">
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className="shadow-sm shadow-gray-600 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-sm duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <Link
                    className="w-1/2 px-6 py-3 m-4 duration-200  hover:bg-pink  bg-white text-black  rounded-lg"
                    to={link}
                  >
                    Choose
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="m-10 p-40 text-5xl text-gray-700 hover:text-white">
            Coming Soon <span>...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdf2;
