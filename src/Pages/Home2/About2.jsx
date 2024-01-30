import React from "react";
import SectionTile2 from "../../Components/SectionTile2";
import { useSelector } from "react-redux";

function About2() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;

  return (
    <div>
      <SectionTile2 title="About" />
      <div className="mx-20 flex px-10 gap-10 w-full items-center md:mx-2 md:flex-col">
        <div className="flex flex-col gap-5  w-full sm:w-full ">
          <p className="text-fifth ">{description1 || ""}</p>
          <p className="text-fifth ">{description2 || ""}</p>
        </div>
        <div className="h-full  w-1/2 md:w-3/5 sm:w-full">
          {/* <dotlottie-player
            src="https://lottie.host/4cd315a8-7321-4684-8941-f5661bd17891/PbKhCG39LH.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player> */}
          <img src={lottieURL} alt="About Me" />
        </div>
      </div>

      <div className="py-10 mx-20">
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
