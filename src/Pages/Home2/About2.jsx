import React from "react";
import SectionTile2 from "../../Components/SectionTile2";
import { useSelector } from "react-redux";

function About2() {

    const { portfolioData } = useSelector((state)=>state.root)
    const { about } = portfolioData;
    const { skills , description1 , description2 } = about;

  return (
    <div>
      <SectionTile2 title="About" />
      <div className="flex  w-full items-center sm:flex-col">
      <div className="flex flex-col gap-5 w-1/2 sm:w-full ">
          <p className="text-fifth ">
            {description1 || ""}
          </p>
          <p className="text-fifth ">
            {description2 || ""}
          </p>
        </div>
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/4cd315a8-7321-4684-8941-f5661bd17891/PbKhCG39LH.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
       
      </div>

      <div className="py-5">
        <h1 className="text-fifth text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="border border-fifth py-3 px-8">
              <h1 className="text-fifth ">{skill}</h1>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default About2;
